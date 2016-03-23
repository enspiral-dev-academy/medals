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
    h('h1', grad.name),
    h('div.info',
      h('img', {src: grad.gravatar}, 'profile:' + grad.name),
      h('ol',
        (grad.links || []).map(function (e) {
          return h('li', h('a', {href: e}, e))
        })
      ),
      grad.cv ? h('a', {href: grad.cv}) : 'cv is missing'
    ),
    (function () {
      var div = h('div.bio')
      div.innerHTML = marked(grad.bio)
      return div
    })()
  )

}



