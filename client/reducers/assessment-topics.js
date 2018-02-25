import {GET_TOPICS} from '../actions/assessments'

const assessmentTopics = (state = [''], action) => {
  switch (action.type) {
    case GET_TOPICS:
      return action.topics
    default:
      return state
  }
}

export default assessmentTopics
