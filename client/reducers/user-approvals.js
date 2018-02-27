import {LOG_OFF, REQUEST_APPROVAL_UPDATE} from '../actions/auth'

const updatedUsers = (state = null, action) => {
  switch (action.type) {
    case REQUEST_APPROVAL_UPDATE:
      return null

    case LOG_OFF:
      return null

    default:
      return state
  }
}

export default updatedUsers
