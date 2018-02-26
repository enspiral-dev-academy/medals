import request from '../lib/api'
import {showError} from './error'

export const REQUEST_SAVE_GRAD_PROFILE = 'REQUEST_SAVE_GRAD_PROFILE'
export const RECEIVE_SAVE_GRAD_PROFILE = 'RECEIVE_SAVE_GRAD_PROFILE'

export const requestSaveGradProfile = () => {
  return {
    type: REQUEST_SAVE_GRAD_PROFILE
  }
}

const receiveSaveGradProfile = (userData) => {
  return {
    type: RECEIVE_SAVE_GRAD_PROFILE,
    userData: userData
  }
}

export function saveGradProfile (userData) {
  return (dispatch) => {
    dispatch(requestSaveGradProfile())
    request('post', '/users/editedProfile', userData)
      .then(res => {
        dispatch(receiveSaveGradProfile(res.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting user info'))
      })
  }
}
