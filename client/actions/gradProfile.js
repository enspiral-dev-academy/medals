import request from '../lib/api'
import {showError} from './error'

export const REQUEST_GRAD_PROFILE = 'REQUEST_GRAD_PROFILE'
export const RECEIVE_GRAD_PROFILE = 'RECEIVE_GRAD_PROFILE'
export const EDIT_GRAD_PROFILE = 'EDIT_GRAD_PROFILE'

export const requestGradProfile = (userId) => {
  return {
    type: REQUEST_GRAD_PROFILE,
    loading: true
  }
}

const receiveGradProfile = (userData) => {
  return {
    type: RECEIVE_GRAD_PROFILE,
    userData
  }
}

export function getGradProfile (userId) {
  return (dispatch) => {
    dispatch(requestGradProfile())
    request('get', `/users/grad/${userId}`)
      .then(res => {
        dispatch(receiveGradProfile(res.body))
        // dispatch(clearError())
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting user info'))
      })
  }
}
