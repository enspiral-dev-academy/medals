require('dotenv').config()
var server = require('./server')

var PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
