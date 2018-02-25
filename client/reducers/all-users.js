import {RECEIVE_ALL_USERS, LOG_OFF, REQUEST_ALL_USERS} from '../actions/auth'

const allUsers = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.allUsers

    case REQUEST_ALL_USERS:
      return []

    case LOG_OFF:
      return []

    default:
      return state
  }
}

export default allUsers
