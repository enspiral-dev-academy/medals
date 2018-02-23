import request from '../lib/api'
import {showError, clearError} from './error'

export const REQUEST_GRAD_PROFILE = 'REQUEST_GRAD_PROFILE'
export const RECEIVE_GRAD_PROFILE = 'RECEIVE_GRAD_PROFILE'
export const EDIT_GRAD_PROFILE = 'EDIT_GRAD_PROFILE'

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

const editGradProfile = (currentUser) => {
  return {
    type: EDIT_GRAD_PROFILE,
    currentUser
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

export function submitEditGradProfile (updatedUser) {
  console.log('Hello', updatedUser)
  return (dispatch) => {
    dispatch(editGradProfile(updatedUser))
    request('post', '/users/editedProfile', updatedUser)
      .then(res => {
        // Needs correction once getGradProfile is completed
        // dispatch(getGradProfile(res.body.id))
        dispatch(clearError())
      })
      .catch(() => {
        dispatch(showError('An unexpected error has occured.'))
      })
  }
}
