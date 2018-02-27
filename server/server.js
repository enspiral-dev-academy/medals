const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const github = require('./routes/github')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/users')
const tagRoutes = require('./routes/tags')
const sprintRoutes = require('./routes/sprints')
const userProfile = require('./routes/profile')

const server = express()
server.use(express.static(path.join(__dirname, 'public')))
server.use(bodyParser.json())

server.use('/auth/github', github)
server.use('/api/v1/auth', authRoutes)
server.use('/api/v1/users', userRoutes)
server.use('/api/v1/tags', tagRoutes)
server.use('/api/v1/sprints', sprintRoutes)
server.use('/api/v1/profile', userProfile)

// Default route for non-API requests
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
