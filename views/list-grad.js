//makes hyperscript work on the server.
require('html-element')
var h = require('hyperscript')
var marked = require('marked')

function toArray (a) {
  if(Array.isArray(a)) return a
  if(!a) return []
  return [a]
}

module.exports = function (grad) {
  return h('div.grad',
    h('div.grad--list-image',
      h('div.grad--list-image--wrapper',
        h('img.profile', {
          src: grad.image
        }, 'profile:' + grad.name)
      )
    ),
    h('div.grad--list-content',
      h('div.triangle'),
      h('div.grad--list-content__wrapper',
        h('h2', grad.name),
        (function () {
          var div = h('div.bio')
          div.innerHTML = marked('\“'+grad.bio+'\”' || '')
          return div
        }), 
        h('h5.action', 'Read more about ' + grad.name)
      )
    )
  )
}