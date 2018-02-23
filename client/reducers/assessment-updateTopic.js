import {UPDATE_TOPIC} from '../actions/assessments'

const updateTopic = (state = ['test'], action) => {
  switch (action.type) {
    case UPDATE_TOPIC:
      return action.questionTopic
    default:
      return state
  }
}

export default updateTopic
