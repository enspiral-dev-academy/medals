'use strict'
/* global actor */

const signinPage = require('../pages/signin')
const personifiedMethods = require('./personified-methods')

module.exports = function () {
  return actor(Object.assign({
    signsin: function (username, password) {
      signinPage._init()
      signinPage.signin(username, password)
    }
  }, personifiedMethods))
}
