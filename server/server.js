const path = require('path')
const express = require('express')

const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/users')

const server = express()
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/auth', authRoutes)
server.use('/api/v1/users', userRoutes)

// Default route for non-API requests
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
