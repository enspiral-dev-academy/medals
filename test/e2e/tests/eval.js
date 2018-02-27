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
  registeredUser.clicks('Submit Answer')
  registeredUser.clicks('Next Question')
  registeredUser.clicks('input')
  registeredUser.clicks('Submit Answer')
  registeredUser.clicks('Complete Evaluation')
  registeredUser.sees('Well Done')
  registeredUser.clicks('Evaluate Again')
  registeredUser.sees('Redux')
})
