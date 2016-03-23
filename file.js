var h = require('hyperscript')

module.exports = function (uploadUrl, onUpload) {
  var input
  var prog = h('span')
  return h('div.upload', h('input', {type: 'file', onchange: function (ev) {

    var xhr = new XMLHttpRequest()
    xhr.addEventListener('progress', function (p) {
      prog.innerText = JSON.stringify(p)
    })
    xhr.open('post', uploadUrl)
    xhr.send(ev.target.files[0])
  }}), prog)

}

document.body.appendChild(module.exports('/blobs/add', function (err, key) {
  console.log(err, key)
}))


