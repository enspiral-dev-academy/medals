//makes hyperscript work on the server.
require('html-element')
var h = require('hyperscript')
var marked = require('marked')


function toArray (a) {
  if(Array.isArray(a)) return a
  if(!a) return []
  return [a]
}

var URL = require('url')

function favicon (url) {
  if('string' !== typeof url) return
  var u = URL.parse(url)
  u.pathname = '/favicon.ico'
  u.path = u.search = u.query = ''
  console.log(url, u, URL.format(u))
  return URL.format(u)
}

module.exports = function (grad) {
  return h('div.grad',
    h('h1', grad.name),
    h('div.info',
      h('img.profile', {
        src: grad.image
      }, 'profile:' + grad.name),
      h('ol',
        toArray(grad.links).map(function (e) {
          return h('li',
            h('img.favicon', {src: favicon(e)}),
            h('a', {href: e}, e)
          )
        })
      ),
      grad.cv ? h('a', {href: grad.cv}) : 'cv is missing'
    ),
    (function () {
      var div = h('div.bio')
      div.innerHTML = marked(grad.bio || '')
      return div
    })()
  )

}

