import {RECEIVE_GRAD_PROFILE} from '../actions/gradProfile'

const initialState = {
  userId: 1,
  aboutMe: 'I am an about section',
  location: 'I am a location',
  githubLink: 'I am a github link',
  linkedinLink: 'I am a linkedin link',
  portfolioLinkOne: 'I am a portfolio',
  portfolioLinkTwo: 'I am a portfolio',
  portfolioLinkThree: 'I am a portfolio',
  previousExperience: 'I am a previousExperience',
  interests: 'I am an interest'
}

const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_GRAD_PROFILE:
      return action.userData

    default:
      return state
  }
}

export default getUserReducer
