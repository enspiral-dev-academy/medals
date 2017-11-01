'use strict'
/* global actor */

const personifiedMethods = require('./personified-methods')

module.exports = function () {
  return actor(personifiedMethods)
}
