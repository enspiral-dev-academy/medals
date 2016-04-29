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
      h('h2', grad.name),
      h('div.info',
        grad.cv ? h('a', {href: grad.cv}) : 'cv is missing'
      ),
      (function () {
        var div = h('div.bio')
        div.innerHTML = marked(grad.bio || '')
        return div
      })()
    )
  )
