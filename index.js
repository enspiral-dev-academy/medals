var http = require('http')
var fs = require('fs')
var Level = require('level')
var Sublevel = require('level-sublevel/bytewise')
var Blobs = require('multiblob')
var pl = require('pull-level')
var path = require('path')

var MuxHttp = require('muxhttp')

var config = require('rc')('eda-grads', {
  path: path.join(process.env.HOME, '.eda-grads'),
  port: 8000,
})

var merge = require('deep-merge')

exports = module.exports = function (config) {

  var db = Sublevel(Level(path.join(config.path, 'db'), {valueEncoding: 'json'}))
  var blobs = Blobs({dir: path.join(config.path, 'blobs'), alg: 'sha256'})

  return {
    put: function (opts, cb) {
      console.log('put', opts)
      db.get(opts.key, function (err, _value) {
        console.log(err, opts.key, opts.value, _value)
        if(err || !_value) db.put(opts.key, opts.value, cb)
        else {
          console.log(opts.key, merge(opts.value, _value))
          db.put(opts.key, merge(opts.value, _value), cb)
        }
      })
    },
    get: function (key, cb) {
      console.log('GET', key)
      db.get(key.key || key, cb)
    },
    read: function (opts) {
      return pl.read(db, opts)
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

var frontend = fs.readFileSync('./static/index.html')

if(!module.parent) {
  if(process.argv[2] === 'server')
    var server = http.createServer(require('stack')(
      function (req, res, next) {
        if(req.url == '/') res.end(frontend)
        else next()
      },
      MuxHttp.createServer(exports.manifest, exports(config))
    ))
    .listen(config.port, function () {
      console.log('listening on:', server.address())
    })
  else
  require('muxrpcli')
    (process.argv.slice(2), exports.manifest, exports(config))
}

