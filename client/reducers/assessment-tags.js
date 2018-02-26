import {GET_TAGS} from '../actions/assessments'

const assessmentTags = (state = [''], action) => {
  switch (action.type) {
    case GET_TAGS:
      return action.tags
    default:
      return state
  }
}

export default assessmentTags
