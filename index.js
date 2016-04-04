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

var Tiny = require('tiny-route')

var config = require('rc')('eda-grads', {
  path: path.join(process.env.HOME, '.eda-grads'),
  port: 8000,
})

var merge = require('deep-merge')(function (a, b, k) {
  console.log(a, b)
  return b != null ? b : a
})

exports = module.exports = function (config) {

  var db = Sublevel(Level(path.join(config.path, 'db'), {valueEncoding: 'json'}))
  var blobs = Blobs({dir: path.join(config.path, 'blobs'), alg: 'sha256'})

  return {
    put: function (opts, cb) {
      db.get(opts.key, function (err, _value) {
        if(err || !_value) db.put(opts.key, opts.value || {}, cb)
        else {
          console.log('old', _value)
          console.log('new', opts.value)
          console.log('mrg', merge(_value, opts.value))
          console.log()
          db.put(opts.key, merge(_value, opts.value) || {}, cb)
        }
      })
    },
    get: function (key, cb) {
      db.get(key.key || key, cb)
    },
    read: function (opts) {
      return pl.read(db)
    },
    blobs: blobs
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
  }
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
      function (req, res, next) {
        if(req.method !== 'GET') return next()
        if(req.url == '/') fs.createReadStream(index).pipe(res)
        else next()
      },
      BlobsHttp(api.blobs, '/blobs')
    ))
    .listen(config.port, function () {
      console.log('listening on:', server.address())
    })

    function log (n) {
      return pull.through(function (e) {
        console.log(n, e)
      })
    }

    console.log(api, exports.manifest)

    WS.createServer({server: server}, function (ws) {
      var rpc = MuxRpc(exports.manifest, exports.manifest, JSONDL) (api)
      pull(ws, rpc.createStream(), ws)
    })

  }
  else
    require('muxrpcli')
      (process.argv.slice(2), exports.manifest, exports(config))
}


