import {
  RECEIVE_USER_PROFILE,
  REQUEST_USER_PROFILE
} from '../actions/userProfile'

const initialState = {
  username: 'username',
  firstName: '',
  preferredName: '',
  surname: '',
  email: '',
  profilePic: '',
  bio: '',
  currentPassword: '',
  newPassword: '',
  confirm: ''
}

const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_USER_PROFILE:
      return action.userData

    case REQUEST_USER_PROFILE:
      return {
        loading: action.loading
      }
    default:
      return state
  }
}

export default getUserReducer
