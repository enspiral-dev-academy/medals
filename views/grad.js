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

function icon(url) {
  if('string' !== typeof url) return
  var u = URL.parse(url)
  var host = u.host
  console.log(url, u, URL.format(u))
  if (host.includes('linkedin')) {
    return "<i class='fa fa-linkedin'></i>"
  } else if (host.includes('github')) {
    return "<i class='fa fa-github'></i>"
  } else if (host.includes('twitter')) {
    return "<i class='fa fa-twitter'></i>"
  } else {
    return ''
  }
}

module.exports = function (grad) {
  return h('div.grad--single',
    h('div.person', 
      h('div.image',
        h('img.profile', {
          src: grad.image
        }, 'profile:' + grad.name)
      ),
      h('div', h('h1', grad.name))
    ),
    h('div.details',
      (function () {
        var div = h('div.bio')
        div.innerHTML = "<h4>About me...</h4>" + marked(grad.bio || '')
        return div
      })(),
      h('div.links',
        h('ol',
          toArray(grad.links).map(function (e) {
            return h('li',
              h('a', {href: e, target:"_blank"},
                h('div.icon', 
                  (function () {
                    var div = h('div')
                    div.innerHTML = icon(e)
                    return div
                  })
                )
              )
            )
          })
        ),
        h('div.cv', grad.cv ? h('a', {href: grad.cv}, 'Download CV') : 'cv is missing')
      )
    )
  )
}

