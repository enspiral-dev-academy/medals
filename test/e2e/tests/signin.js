/* global Feature, Scenario */

Feature('Signed out user can sign in')

Scenario('with existing user', (registeredUser, homePage) => {
  registeredUser.signsin('jules', 'jules')
  registeredUser.clicks(homePage.hamburger)
  registeredUser.sees('Home', homePage.header)
  registeredUser.sees('Profile', homePage.header)
  registeredUser.sees('Log off', homePage.header)
  registeredUser.doesntSee('Register', homePage.header)
})
