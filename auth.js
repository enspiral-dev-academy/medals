/*
create

returns a new high entropy url, associated with a resource (email address)

when someone accesses that resource.
that resource is associated with a cookie in their browser.
(record user agent, so that it's possible to show the user a list of logins they currently have)

---

note, to make curl work with cookies must set a "cookie jar"
it seems: `-c file` sets the file to write to,
and `-b file` sets the file to write to. You'd think you'd want
those both to be the same file!
The man page is not clear about this at all.

`curl localhost:8000 -c ./jar -b ./jar`

the man page says that -c should work, but it only seems to write the
jar but not read it! once the cookie is written, you can use -b or --cookie

but that doesn't make sense because there isn't even a b in cookie.
anyway, "cookie" is one of the worst named things in the web stack.
it's a damn ticket stub!
nobody ever gave you a cookie with a seat number on it.

---

What you need to know about cookies.

A cookie is always `key=value` and has "attributes"
that tell the browser what to do. you need `Expires={date}` and `Path=/`.

Without `Expires` set in the future, the cookie will be a "session cookie"
and will expire after the browser exits.

Without `Path=/` the browser will only send the cookie on the path
that it got it from.

*/

var Stack = require('stack')
var Tiny = require('tiny-route')
var crypto = require('crypto')

function random () {
  return crypto.randomBytes(20).toString('hex')
}

module.exports = function () {

  var tickets = {}, byId = {}, stubs = {}

  //administrator role creates a new access token
  //TICKET
  //this can have a time limit (say, 3 days) or number of uses.

  function createAccess (id, cb) {
    var ticket = random()
    byId[id] = ticket; tickets[ticket] = id
    cb(null, ticket)
  }

  //user visits url, access token is used and cookie is created.
  //TICKET STUB.
  //now stub (cookie) represents
  function redeemAccess (ticket, cb) {
    if(!tickets[ticket]) return cb(new Error('unknown or expired ticket'))

    var id = tickets[ticket]
    delete tickets[ticket]
    delete byId[id]
    var stub = random()
    stubs[stub] = id
    cb(null, stub)
  }

  function createCookie(value) {
    return (
      'cookie='+stub
    + ';Path=/'
    + ';Expires='+new Date(Date.now() + 60e3*60*24*365)

    //Security

    //prevents this cookie being sent from another page.
    // https://tools.ietf.org/html/draft-west-first-party-cookies-03
    + 'FirstPartyOnly;'

    // Don't expose cookie to js, prevents XSS attacks from stealing the cookie.
    + 'HttpOnly;' //don't expose to js

    //do not send over http. https only.
    // + 'Secure;' //this should really be used, but need https.
    )
  }

  //since this is all in memory currently,
  //create a resource for testing.
  createAccess('foobar', console.log)

  return Stack(
    // GET /redeem/<code>
    // this route is hit once, by clicking on a link in an email.
    // this tears the ticket, and the cookie represents the validated
    // ticket stub (or: clipped ticket which shows they paid to be on the bus)
    Tiny.get(/\/redeem\/([0-9a-f]+)/, function (req, res, next) {
      console.log('redeem', req.params)
      redeemAccess(req.params[0], function (err, stub) {
        if(err) return next(err)
        res.setHeader('Set-Cookie', createCookie(stub))
        res.setHeader('Location', '/')
        res.statusCode = 303
        res.end('accepted')
      })
    }),
    function (req, res, next) {
      hasAccess(resource, req.headers.cookie, function (err) {
        if(err) return next(403) //unauthorized
        console.log('REQ', req.headers)
        res.end("OKAY:" + req.headers.cookie)
      })
    }
  )
}

if(!module.parent) {
  require('http').createServer(module.exports()).listen(8000)
}

