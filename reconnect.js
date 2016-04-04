//simplest reconnector.
//if a connection attempt ended in under 3
//seconds, consider that an error, and double time until next retry.

//ideas: pause reconnect if user is not on this screen.
//reconnect when they come back.

module.exports = function reconnect(connect, onConnect) {
  var errors = 0
  ;(function next () {
    var attempt = Date.now()
    console.log('connecting...')
    connect(function (err) {
      console.log('reconnecting...')
      if(Date.now() - attempt < 3e3) errors ++
      else                           errors = 0
      setTimeout(next, Math.min(Math.pow(2, errors)*1e3, 15e3))
    })
  })()
}


