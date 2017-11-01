import {SHOW_ERROR, CLEAR_ERROR} from '../actions/error'

function errorMessage (state = '', action) {
  switch (action.type) {
    case SHOW_ERROR:
      return action.errorMessage

    case CLEAR_ERROR:
      return ''

    default:
      return state
  }
}

export default errorMessage
