import {
  REQUEST_SAVE_GRAD_PROFILE,
  RECEIVE_SAVE_GRAD_PROFILE
} from '../../client/actions/gradProfileSaveEdit'

const waitingSaveProfile = (state = false, action) => {
  switch (action.type) {
    case REQUEST_SAVE_GRAD_PROFILE:
      return true

    case RECEIVE_SAVE_GRAD_PROFILE:
      return false

    default:
      return state
  }
}

export default waitingSaveProfile
