import request from '../lib/api'
import {showError} from './error'

export const REQUEST_SAVE_USER_PROFILE = 'REQUEST_SAVE_USER_PROFILE'
export const RECEIVE_SAVE_USER_PROFILE = 'RECEIVE_SAVE_USER_PROFILE'

export const requestSaveUserProfile = () => {
  return {
    type: REQUEST_SAVE_USER_PROFILE
  }
}

const receiveSaveUserProfile = (userData) => {
  return {
    type: RECEIVE_SAVE_USER_PROFILE,
    userData: userData
  }
}

export function saveUserProfile (userData) {
  return (dispatch) => {
    dispatch(requestSaveUserProfile())
    request('post', '/users/editedProfile', userData)
      .then(res => {
        dispatch(receiveSaveUserProfile(res.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting user info'))
      })
  }
}
