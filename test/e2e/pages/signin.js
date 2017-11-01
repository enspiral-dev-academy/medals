'use strict'

/* global actor */

let I

module.exports = {
  _init () {
    I = actor()
  },

  signin (username, password) {
    I.amOnPage('/signin')
    I.fillField('Username', username)
    I.fillField('Password', password)
    I.click('sign-in-button')
  }
}
