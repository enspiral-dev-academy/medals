import request from '../lib/api'
import {showError} from './error'

export const GENERATE_SPRINT = 'GENERATE_SPRINT'

export const generateSprint = (sprints) => {
  return {
    type: GENERATE_SPRINT,
    sprints
  }
}

export function getSprint () {
  return (dispatch) => {
    request('get', '/sprints/')
      .then(res => {
        dispatch(generateSprint(res.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error occured'))
      })
  }
}
