import {GET_TAGS} from '../actions/eval'

const evalTags = (state = [''], action) => {
  switch (action.type) {
    case GET_TAGS:
      return action.tags
    default:
      return state
  }
}

export default evalTags
