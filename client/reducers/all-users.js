import {
  RECEIVE_ALL_USERS,
  LOG_OFF,
  REQUEST_ALL_USERS
} from '../actions/auth'

const allUsers = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.allUsers

    case REQUEST_ALL_USERS:
      return null

    case LOG_OFF:
      return null

    default:
      return state
  }
}

export default allUsers
