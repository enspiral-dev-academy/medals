'use strict'
/* global actor */

const personifiedMethods = require('./personified-methods')
// const registrationPage = require('../pages/register')

module.exports = function () {
  return actor(Object.assign({
    // registers: function (username, password) {
    //   // TODO: complete after researching redirect issue
    //   // registrationPage._init()
    //   // registrationPage.register(username, password)
    // }
  }, personifiedMethods))
}
