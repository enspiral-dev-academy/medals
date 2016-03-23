
var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {

  console.log(req.method, req.path, req.url, req.headers.cookie)

  console.log(req)
  res.setHeader('Set-Cookie', req.headers.cookie || ''+Math.random())

  if(req.method == 'GET')
    fs.createReadStream('./index.html').pipe(res)
  else {
    req.on('end', function () {
      res.end('{"okay": true}')
    })
    req.pipe(process.stdout)
  }

}).listen(1234)

