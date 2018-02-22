import {
  RECEIVE_GRAD_PROFILE,
  REQUEST_GRAD_PROFILE
} from '../actions/gradProfile'

const initialState = {
  userId: 10,
  aboutMe: 'I am an about section',
  location: 'I am a location',
  githubLink: 'I am a github link',
  portfolio: 'I am a portfolio',
  previousExperience: 'I am a previousExperience',
  interests: 'I am a intret'
}

const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_GRAD_PROFILE :
      return {
        ...state
        // action.userData

      }
    case REQUEST_GRAD_PROFILE :
      return {
        ...state
      }
    default :
      return state
  }
}

export default getUserReducer
