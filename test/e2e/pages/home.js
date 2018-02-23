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
  signsout () {
    I.amOnPage('/home')
    I.click('Log off')
  }
}
