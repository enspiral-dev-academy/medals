/* global Feature, Scenario */

Feature('Signed in user can sign out')

Scenario('with existing user', (registeredUser, homePage) => {
  registeredUser.signsin('jules', 'jules')
  registeredUser.signsout()
  registeredUser.clicks(homePage.hamburger)
  registeredUser.sees('Home', homePage.header)
  registeredUser.doesntSee('Profile', homePage.header)
  registeredUser.doesntSee('Log off', homePage.header)
  registeredUser.sees('Register', homePage.header)
  registeredUser.sees('Sign in', homePage.header)
})
