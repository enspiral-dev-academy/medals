var h = require('hyperscript')

//edit a short list of times.

module.exports = function (array, onChange) {
  //copy the input array,
  //treat the array as a single value.
  //(this would be a scaling problem if the array was _very large_
  //but in this case I expect the length to be < 5)
  var _array = array.slice() //copy array.

  //when deletes happen, the array becomes a sparse array.
  //to update, clear the original array, then reinsert everything not deleted.
  function update () {
    [].splice.apply(array, [0, array.length].concat(_array.filter(Boolean)))
    onChange && onChange(array)
  }

  function item(v, i) {
    var li = h('li',
      h('input', {type: 'text', value: _array[i] || '', onchange: function () {
        _array[i] = this.value; update()
      }}),
      //link to delete this item from array.
      h('a', {href: '#', onclick: function (ev) {
        ev.preventDefault()
        delete _array[i]; update();
        ul.removeChild(this)
      }}, 'remove')
    )
    return li
  }

  var ul = h('ul', _array.map(item))

  return h('div', {id:'links'}, ul,
    h('a', {href: '#links', onclick: function () {
      ul.appendChild(item('', _array.length))
    }}, 'add')
  )
}

