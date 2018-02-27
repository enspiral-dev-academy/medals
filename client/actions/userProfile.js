import request from '../lib/api'
import {showError} from './error'

export const REQUEST_USER_PROFILE = 'REQUEST_USER_PROFILE'
export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE'
export const EDIT_USER_PROFILE = 'EDIT_USER_PROFILE'

export const requestUserProfile = (userId) => {
  return {
    type: REQUEST_USER_PROFILE,
    loading: true
  }
}

const receiveUserProfile = (userData) => {
  return {
    type: RECEIVE_USER_PROFILE,
    userData
  }
}

export function getUserProfile (userId) {
  return (dispatch) => {
    dispatch(requestUserProfile())
    request('get', `/users/USER/${userId}`)
      .then(res => {
        dispatch(receiveUserProfile(res.body))
        // dispatch(clearError())
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting user info'))
      })
  }
}
