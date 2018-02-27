import {RECEIVE_USER_PROFILE} from '../actions/userProfile'

const initialState = {
  username: 'this is the users username',
  firstName: 'This is the first name of user',
  preferredName: 'This is my preferred name',
  surname: 'This is the surname of the user',
  email: 'This is the email of the user',
  profilePic: 'This is the user profile picture',
  bio: 'This is the bio of the user',
  currentPassword: 'This is the old password of the user',
  newPassword: 'This is the new password of the user',
  confirm: 'This is where you confirm your new password',
  match: false,
  showMatch: false
}

const getUserProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_USER_PROFILE:
      return action.userProfileData

    default:
      return state
  }
}

export default getUserProfileReducer
