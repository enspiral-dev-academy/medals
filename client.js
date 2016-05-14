'use strict'
//var Client = require('muxhttp/client')
var pull = require('pull-stream')
var h = require('hyperscript')
var MuxRpc = require('muxrpc')
var WS = require('pull-ws-server')
var JSONDL = require('pull-serializer')
var o = require('observable')

var ListGrad = require('./views/list-grad')
var Grad = require('./views/grad')
var Edit = require('./views/edit-grad')
var Admin = require('./views/admin')

//switch between states - state + value
//list, view (feed), edit(feed)

var mode = o() //list, view, edit
var current = o() //current grad

var client
var resource = o()
// --- client side dataset ---
// TODO: move into module ...

var merge = require('deep-merge')
//client side data.

var all = [], keys = {}
function add (data) {
  if(!keys[data.key]) {
    keys[data.key] = data
    all.push(data)
  }
  else
    keys[data.key].value = merge(keys[data.key].value, data.value)
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
    console.log('edited', err, value)
    if(!value) mode('list')
    var _value = {key: data.key || value.email, value: value}
    client.put(_value, function (err) {
      console.log(err, _value, data)
      if(err) { current(data); alert(err.message) }
      else current(_value)
      mode('view')
    })
  })
}

function link (name, onclick) {
  return h('a', name, {href: '#', onclick: onclick})
}


function editLink (data) {
  return link( data ? 'edit' : h('div.add'), function () {
    current(data)
    mode('edit')
  })
}

function canAccess(obv, set, value) {
  return o.transform(obv, function (val) {
    return ~set.indexOf(val) ? value : null
  })
}

function list () {
  return h('ol',
    Object.keys(keys).map(function (key) {
      var value = keys[key].value
      return h('li.grad--card',
        h('div.links',
          canAccess(resource, [key, 'admin'],
            link('edit', function () { current(keys[key]); mode ('edit') })
          )
        ),
        link(ListGrad(value), function () { current(keys[key]); mode ('view') }))
    })
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
  else if('admin' == m) {
    title('admin')
    content(Admin(client))
  }
  else {
    title('eda-grads')
    content(list())
  }
})

require('./reconnect')(function (cb) {
  var ws = WS.connect('ws://quiet-brook-61744.herokuapp.com/')
  //var ws = WS.connect('ws://localhost:8000/')

  client = window.CLIENT = MuxRpc(require('./manifest.json'), null, JSONDL)()

  pull(ws, client.createStream(), pull.through(null, cb), ws)

  client.whoami(function (err, _resource) {
    resource(window.RESOURCE = _resource)
  })

  pull(
    client.read(),
    pull.drain(add, function (err) {
      content(list())
      if(err) console.log(err)
    })
  )
})

document.body.appendChild(
  h('div.page--wrapper',
    h('header',
      h('div.logo', link( h('img', {src:'/assets/logo.png', alt:'enspiral dev academy'}),
          function () { mode ('list') })
      ),
      h('nav',
        editLink(),
        canAccess(resource, ['admin'],
          link( h('img', {src:'/assets/admin-logo.png', alt:'admin portal'}), function () { mode ('admin') })
        )
      )),
    h('section.main',
      h('div.content', content))
    )
)



