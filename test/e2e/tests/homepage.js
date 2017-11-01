/* global Feature, Scenario */

Feature('The homepage is visible')

Scenario('to an anonymous user', (unregisteredUser, homePage) => {
  unregisteredUser.isOnPage('/')
  unregisteredUser.sees('REKA', homePage.splash)
})
