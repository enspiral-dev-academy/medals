var o = require('observable')
var h = require('hyperscript')

module.exports = function field (name, object, type) {
    var v = o()
    v(object[name])
    v(function (value) {
      console.log('SET', name, value, object)
      object[name] = value
    })
    return h('div.field',
      h('label', name),
      type === 'textarea' ?
      h('textarea', {onchange: function () {
        console.log('update', this.value)
        v(this.value)
      }}, v)
      :
      h('input', {type: 'text', value: v, onchange: function () {
        console.log('update', this.value)
        v(this.value)
      }})
    )
  }

