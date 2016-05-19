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

var backgrounds = [
  {  image: '/assets/bg_01.png'
  },
  {  image: '/assets/bg_02.png'
  },
  {  image: '/assets/bg_03.png'
  },
  {  image: '/assets/bg_04.png'
  },
  {  image: '/assets/bg_05.png'
  },
]

// event handler function
function handler(e) {
  var key = window.event ? e.keyCode : e.which;
  if (key == 27) {
    mode('list')
  }
  //console.log(key, e.shiftKey, e.altKey, e.ctrlKey);
}

// attach handler to the keydown event of the document
if (document.attachEvent) document.attachEvent('onkeydown', handler);
else document.addEventListener('keydown', handler);

// -------

var title = o()
var content = o()

function view () {
  return h('div.view', link(h('img.back', {src:'/assets/back-arrow.svg', alt:'back to home page'}), function () { mode ('list') }), Grad(current().value))
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

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
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
  //var ws = WS.connect('wss://quiet-brook-61744.herokuapp.com:/')
  var ws = WS.connect('ws://localhost:8000/')

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

document.addEventListener("DOMContentLoaded", function(event) { 
  var bgNumber = getRandomInt(0, backgrounds.length-1)
  document.body.style.background = 'url(' + backgrounds[bgNumber].image + ')'
  //bug! make it so that a click on the bg will go back to main view
  document.querySelector('.page--wrapper').addEventListener('click', mode('list'), false)
})





