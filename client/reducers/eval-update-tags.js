import {UPDATE_TAGS} from '../actions/eval'

const updateTag = (state = ['test'], action) => {
  switch (action.type) {
    case UPDATE_TAGS:
      return action.questionTag
    default:
      return state
  }
}

export default updateTag
