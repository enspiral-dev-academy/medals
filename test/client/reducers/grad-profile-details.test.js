/* global test expect */
import reducer from '../../../client/reducers/gradProfileDetails'

test('getUserReducer initial state of undefined', () => {
  const expectedInitialState = {
    userId: 1,
    aboutMe: 'I am an about section',
    location: 'I am a location',
    githubLink: 'I am a github link',
    portfolio: 'I am a portfolio',
    previousExperience: 'I am a previousExperience',
    interests: 'I am an interest'
  }

  const actualState = reducer(undefined, {type: null})

  expect(actualState).toEqual(expectedInitialState)
})

test('RECEIVE_GRAD_PROFILE receives profile', () => {
  const beforeActionState = {
    userId: 1,
    aboutMe: 'I am an about section',
    location: 'I am a location',
    githubLink: 'I am a github link',
    portfolio: 'I am a portfolio',
    previousExperience: 'I am a previousExperience',
    interests: 'I am an interest'
  }
  const action = {
    type: 'RECEIVE_GRAD_PROFILE',
    userData: {
      userId: 2,
      aboutMe: 'Elyse',
      location: 'Elyse',
      githubLink: 'Elyse',
      portfolio: 'Elyse',
      previousExperience: 'Elyse',
      interests: 'Elyse'
    }
  }
  const afterActionState = {
    userId: 2,
    aboutMe: 'Elyse',
    location: 'Elyse',
    githubLink: 'Elyse',
    portfolio: 'Elyse',
    previousExperience: 'Elyse',
    interests: 'Elyse'
  }

  const actualAfterActionState = reducer(beforeActionState, action)

  expect(actualAfterActionState).toEqual(afterActionState)
})
