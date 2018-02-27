import request from '../lib/api'
import {showError} from './error'

export const REQUEST_USER_PROFILE = 'REQUEST_USER_PROFILE'
export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE'

export const requestUserProfile = () => {
  return {
    type: REQUEST_USER_PROFILE
  }
}

export const receiveUserProfile = (userProfileData) => {
  return {
    type: RECEIVE_USER_PROFILE,
    userProfileData
  }
}

export function getUserProfile (userId) {
  return (dispatch) => {
    dispatch(requestUserProfile())
    request('get', `/profile/${userId}`)
      .then(res => {
        dispatch(receiveUserProfile(res.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting user info'))
      })
  }
}
