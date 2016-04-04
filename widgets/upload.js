var h = require('hyperscript')

module.exports = function (uploadUrl, onUpload) {
  var input
  var prog = h('span')
  return h('input', {
    type: 'file',
    onchange: function (ev) {
      var filename = ev.target.files[0].name
      var xhr = XHR = new XMLHttpRequest()
      xhr.addEventListener('load', function (ev) {
        onUpload(null, xhr.responseText, filename)
      })
      xhr.addEventListener('error', function (ev) {
        onUpload(ev)
      })
      xhr.addEventListener('abort', function (ev) {
        onUpload(ev)
      })
      xhr.open('post', uploadUrl)
      xhr.send(ev.target.files[0])
    }
  })

}



