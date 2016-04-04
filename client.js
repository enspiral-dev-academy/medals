'use strict'
//var Client = require('muxhttp/client')
var pull = require('pull-stream')
var h = require('hyperscript')
var MuxRpc = require('muxrpc')
var WS = require('pull-ws-server')
var JSONDL = require('pull-serializer')
var o = require('observable')

var Grad = require('./views/grad')
var Edit = require('./views/edit-grad')

//switch between states - state + value
//list, view (feed), edit(feed)

var mode = o() //list, view, edit
var current = o() //current grad

var client

// --- client side dataset ---
// TODO: move into module ...

var merge = require('deep-merge')
//client side data.

var all = [], keys = {}
function add (data) {
  console.log('ADD', data)
  if(!keys[data.key]) {
    keys[data.key] = data
    all.push(data)
  }
  else {
    keys[data.key].value = merge(keys[data.key].value, data.value)
  }
}

// --------


var title = o()
var content = o()

function view () {
  return h('div.view', Grad(current().value))
}

function edit (data) {
  data = data || {}
  return Edit(data.value, function (err, value) {
    if(!value) mode('list')
    var _value = {key: data.key || value.email, value: value}
    client.put(_value, function () {
      current(_value)
      mode('view')
    })
  })
}

function link (name, onclick) {
  return h('a', name, {href: '#', onclick: onclick})
}

function editLink (data) {
  return link( data ? 'edit' : 'new', function () {
    current(data)
    mode('edit')
  })
}

function list () {
  return h('ol',
    Object.keys(keys).map(function (key) {
      var value = keys[key].value
      return h('li',
        h('div.links',
          link('edit', function () { current(keys[key]); mode ('edit') }),
          link('view', function () { current(keys[key]); mode ('view') })
        ),
        Grad(value))
    }),
    editLink()
  )
}

mode('list')

mode(function (m) {
  if('view' == m) {
    title(current().value.name)
    content(view(current()))
  }
  else if('edit' == m) {
    title(current() ? 'edit:'+current().value.name: 'enter new grad')
    content(edit(current()))
  }
  else {
    title('eda-grads')
    content(list())
  }
})

require('./reconnect')(function (cb) {
  var ws = WS.connect('ws://localhost:8000/')

  client = window.CLIENT = MuxRpc(require('./manifest.json'), null, JSONDL)()

  pull(ws, client.createStream(), pull.through(null, cb), ws)

  pull(
    client.read(),
    pull.drain(add, function (err) {
      content(list())
      if(err) console.log(err)
    })
  )
})

document.body.appendChild(
  h('div',
    h('h1', title),
    h('div.state',
      link('all', function () { mode ('list') }),
      link('edit', function () { mode ('edit') }),
      link('view', function () { mode ('view') }),
      link('new', function () { current(); mode('edit') })
    ),
    h('div.content', content))
)

