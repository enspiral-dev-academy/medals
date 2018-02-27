/* global Feature, Scenario */

Feature('Signed in user, can self evaluate')

Scenario('with existing user', (registeredUser, homePage) => {
  registeredUser.signsin('jules', 'jules')
  registeredUser.clicks(homePage.hamburger)
  registeredUser.clicks('Home', homePage.header)
  registeredUser.clicks(homePage.hamburger)
  registeredUser.clicks('Eval(me)')
  registeredUser.clicks('JavaScript')
  registeredUser.clicks('eval-btn')
  registeredUser.clicks('input')
  registeredUser.sees('created', 'h2')
  // // registeredUser.click
  // registeredUser.clicks('submit-btn')
})
