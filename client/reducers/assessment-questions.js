import {FETCH_QUESTIONS} from '../actions/assessments'

const assessmentQuestions = (state = ['test'], action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return action.questions
    default:
      return state
  }
}

export default assessmentQuestions
