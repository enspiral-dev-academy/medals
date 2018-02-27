import {
  RECEIVE_GRAD_TAGS
} from '../actions/gradProfile'

const initialState = []

const getTagReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_GRAD_TAGS:
      return action.tags

    default:
      return state
  }
}

export default getTagReducer
