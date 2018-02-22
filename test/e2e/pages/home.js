'use strict'

/* global actor */

let I

module.exports = {
  splash: '.home',
  header: '.header',
  hamburger: '.navbar-burger',
  _init () {
    I = actor()
  },

  signout () {
    I.amOnPage('/home')
    I.click('Log off')
  }

}
