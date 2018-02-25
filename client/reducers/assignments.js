import {GENERATE_SPRINT} from '../actions/assignments'

const generateSprint = (state = [], action) => {
  switch (action.type) {
    case GENERATE_SPRINT:
      return action.sprints
    default:
      return state
  }
}

export default generateSprint
