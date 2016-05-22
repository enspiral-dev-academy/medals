'use strict'
var http = require('http')
var fs = require('fs')
var Level = require('level')
var Sublevel = require('level-sublevel/bytewise')
var Blobs = require('multiblob')
var pl = require('pull-level')
var path = require('path')
var MuxRpc = require('muxrpc')
var WS = require('pull-ws-server')
var pull = require('pull-stream')
var JSONDL = require('pull-serializer')
var BlobsHttp = require('./blobs-http')
var mkdirp = require('mkdirp')
var Ecstatic = require('ecstatic')

var Auth = require('ticket-auth')

var Tiny = require('tiny-route')

var config = require('rc')('eda-grads', {
  //path: path.join(process.env.HOME, '.eda-grads'),
  path: path.join('./storage', '.eda-grads'),
  port: 8000,
})

var merge = require('deep-merge')(function (a, b, k) {
  return b != null ? b : a
})

exports = module.exports = function (config) {

  mkdirp.sync(config.path)

  var db = Sublevel(Level(path.join(config.path, 'db'), {valueEncoding: 'json'}))
  var blobs = Blobs({dir: path.join(config.path, 'blobs'), alg: 'sha256'})
  var auth = Auth(db.sublevel('auth'))

  return {
    put: function (opts, cb) {
      db.get(opts.key, function (err, _value) {
        if(err || !_value) db.put(opts.key, opts.value || {}, cb)
        else {
          db.put(opts.key, merge(_value, opts.value) || {}, cb)
        }
      })
    },
    get: function (key, cb) {
      db.get(key.key || key, cb)
    },
    read: function (opts) {
      console.log(this)
      return pl.read(db)
    },
    blobs: blobs,
    db: db,
    auth: auth,
    whoami: function () {
      return this.id
    }
  }
}

exports.manifest = {
  get: 'async',
  put: 'async',
  read: 'source',
  blobs: {
    get: 'source',
    add: 'sink',
    ls: 'source'
  },
  auth: {
    create: 'async',
    redeem: 'async',
    check: 'async',
    dump: 'source'
  },
  whoami: 'sync'
}

var index = path.join(__dirname, 'static/index.html')

if(!module.parent) {
  if(!process.argv[2]) {
    fs.writeFileSync(
      path.join(__dirname, 'manifest.json'),
      JSON.stringify(exports.manifest, null, 2)
    )

    var api = exports(config)

    var server = http.createServer(require('stack')(

      Ecstatic(path.join(__dirname, 'static')),

      Tiny.get(/^\/redeem\/([0-9a-f]+)/, function (req, res, next) {
        api.auth.redeem(req.params[0], function (err, cookie) {
          if(err) return next(err)
          console.log('code redeemed', cookie)
          res.setHeader('Set-Cookie', cookie)
          res.setHeader('Location', '/')
          res.statusCode = 303
          res.end()
        })
      }),

      //check cookies, and authorize this connection (or not)
      function (req, res, next) {
        api.auth.check(req.headers.cookie, function (err, resource) {
          req.access = resource; next()
        })
      },

//      function (req, res, next) {
//        if(req.method !== 'GET') return next()
//        if(req.url == '/') fs.createReadStream(index).pipe(res)
//        else next()
//      },
//
      //return list of the current access rights. (for debugging)
      Tiny.get(/^\/whoami/, function (req, res, next) {
        res.end(JSON.stringify(req.access)+'\n')
      }),

      BlobsHttp(api.blobs, '/blobs')
    ))
    .listen(process.env.PORT || config.port, function () {
      console.log('listening on:', server.address())
    })

    WS.createServer({server: server}, function (ws) {
      api.auth.check(ws.headers.cookie, function (err, resource) {
        ws.access = resource
        var rpc = MuxRpc(exports.manifest, exports.manifest, JSONDL)
          (api,
            //PERMS.
            function (name, args) {
              if(name[0] !== 'put' || resource === 'admin') return //allowed
              if(name[0] === 'put') {
                if(args[0].key !== resource) {
                  console.log('permission-error', args[0].key, resource)
                  throw new Error('do not have permission to access:'+args[0].key)
                }
              }
              if(name[0] === 'auth' && resource != 'admin')
                throw new Error('only admin may access auth methods')
            },
            resource
          )
        pull(ws, rpc.createStream(), ws)
      })
    })

  }
  else
    require('muxrpcli')
      (process.argv.slice(2), exports.manifest, exports(config))
}


