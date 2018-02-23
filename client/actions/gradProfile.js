import request from '../lib/api'
import {showError} from './error'

export const REQUEST_GRAD_PROFILE = 'REQUEST_GRAD_PROFILE'
export const RECEIVE_GRAD_PROFILE = 'RECEIVE_GRAD_PROFILE'

export const requestGradProfile = (userId) => {
  return {
    type: REQUEST_GRAD_PROFILE,
    userId: userId
  }
}

const receiveGradProfile = (userData) => {
  return {
    type: RECEIVE_GRAD_PROFILE,
    userData: userData
  }
}

export function getGradProfile (userId) {
  return (dispatch) => {
    dispatch(requestGradProfile(userId))
    request('get', `/users/${userId}`)
      .then(res => {
        dispatch(receiveGradProfile(res.body))
        // dispatch(clearError())
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting user info'))
      })
  }
}
