'use strict'

module.exports = {
  sees: function () {
    this.see.apply(this, Array.from(arguments))
  },
  doesntSee: function () {
    this.dontSee.apply(this, Array.from(arguments))
  },
  isOnPage: function () {
    this.amOnPage.apply(this, Array.from(arguments))
  },
  fillsField: function () {
    this.fillField.apply(this, Array.from(arguments))
  },
  clicks: function () {
    this.click.apply(this, Array.from(arguments))
  }
}
