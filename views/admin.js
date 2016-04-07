var h = require('hyperscript')
var isEmail = require('validate-email')

module.exports = function admin (client) {
  //create a new invite (enter comma separated list of email addresses)

  //show tickets that have been used, and not used.
  //ability to revoke a specific ticket or stub, or all of either.
  var created = {}
  var invalid = []

  function update () {
    err.innerHTML = ''
    err.appendChild(
      h('div',
        invalid.length ? h('label', 'invalid email addresses:') : null,
        h('span.invalid',
          invalid.map(function (e) {
            return e
          }).join(', ')
        )
      )
    )

    out.innerHTML = ''
    out.appendChild(
      h('pre',
        Object.keys(created).map(function (email) {
          return [email, created[email]].join(', ')
        }).join('\n')
      )
    )
  }
  var ta = h('textarea', {onchange: function () {
    invalid.length = 0
    var create = ta.value.split(',').map(function (e) {
      return e.trim()
    }).filter(function (email) {
      //check if is a valid email address...
      if(!isEmail(email)) {
        invalid.push(email)
        return false
      }
      if(!created[email]) {
        created[email] = 'pending...'
        return true
      }
    })
    var n = created.length
    create.forEach(function(email) {
      client.auth.create(email, function (err, ticket) {
        created[email] =
          err ? err.message : window.location.origin+'/redeem/'+ticket
        //update exactly once.
        if(!--n) update()
      })
    })
    update()
  }})
  var out = h('div.created')
  var err = h('div.error')
  return h('div.admin',
    ta,
    err,
    out
  )
}


