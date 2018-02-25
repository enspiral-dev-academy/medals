import request from '../lib/api'
import {showError, clearError} from './error'
import {saveAuthToken, logOff as logOffUser} from '../lib/auth'

export const LOG_OFF = 'LOG_OFF'
export const REQUEST_SIGNIN = 'REQUEST_SIGNIN'
export const RECEIVE_SIGNIN = 'RECEIVE_SIGNIN'
export const REQUEST_USER_DETAILS = 'REQUEST_USER_DETAILS'
export const RECEIVE_USER_DETAILS = 'RECEIVE_USER_DETAILS'
export const REQUEST_UPDATE_PROFILE = 'REQUEST_UPDATE_PROFILE'
export const RECEIVE_UPDATE_PROFILE = 'RECEIVE_UPDATE_PROFILE'
export const REQUEST_USER_REGISTRATION = 'REQUEST_USER_REGISTRATION'
export const RECEIVE_USER_REGISTRATION = 'RECEIVE_USER_REGISTRATION'

const requestUserRegistration = () => {
  return {
    type: REQUEST_USER_REGISTRATION
  }
}

const receiveUserRegistration = (token) => {
  return {
    type: RECEIVE_USER_REGISTRATION,
    token
  }
}

const requestSignIn = () => {
  return {
    type: REQUEST_SIGNIN
  }
}

const receiveSignIn = (token) => {
  return {
    type: RECEIVE_SIGNIN,
    token
  }
}

export const logOff = () => {
  logOffUser()
  return {
    type: LOG_OFF
  }
}

const requestUserDetails = () => {
  return {
    type: REQUEST_USER_DETAILS
  }
}

const receiveUserDetails = (userDetails) => {
  return {
    type: RECEIVE_USER_DETAILS,
    userDetails
  }
}

const requestUpdateProfile = () => {
  return {
    type: REQUEST_UPDATE_PROFILE
  }
}

const receiveUpdateProfile = () => {
  return {
    type: RECEIVE_UPDATE_PROFILE
  }
}

export function register (newUser) {
  return (dispatch) => {
    dispatch(requestUserRegistration())
    return request('post', '/auth/register', newUser)
      .then(res => {
        const token = saveAuthToken(res.body.token)
        dispatch(receiveUserRegistration(res.body))
        dispatch(getUserDetails(token.id))
        dispatch(clearError())
      })
      .catch(err => {
        const res = err.response.body
        const msg = 'This username is unavailable'
        if (res && res.errorType === 'USERNAME_UNAVAILABLE') {
          return dispatch(showError(msg))
        }
        dispatch(showError('An unexpected error has occurred.'))
      })
  }
}

export function signIn (user, confirmSuccess) {
  return (dispatch) => {
    dispatch(requestSignIn())
    request('post', '/auth/signin', user)
      .then(res => {
        const token = saveAuthToken(res.body.token)
        dispatch(receiveSignIn(res.body))
        dispatch(getUserDetails(token.id))
        dispatch(clearError())
        confirmSuccess()
      })
      .catch(err => {
        const res = err.response.body
        const msg = 'Username and password don\'t match an existing user'
        if (res && res.errorType === 'INVALID_CREDENTIALS') {
          return dispatch(showError(msg))
        }
        dispatch(showError('An unexpected error has occurred.'))
      })
  }
}

export function getUserDetails (userId) {
  return (dispatch) => {
    dispatch(requestUserDetails())
    request('get', `/users/${userId}`)
      .then(res => {
        dispatch(receiveUserDetails(res.body))
        dispatch(clearError())
      })
      .catch(() => {
        dispatch(showError('An unexpected error has occurred.'))
      })
  }
}

export function updateProfile (profile) {
  return (dispatch) => {
    dispatch(requestUpdateProfile())
    request('put', `/users/${profile.id}`, profile)
      .then(res => {
        dispatch(receiveUpdateProfile())
        dispatch(getUserDetails(profile.id))
        dispatch(clearError())
      })
      .catch(() => {
        dispatch(showError('An unexpected error has occurred.'))
      })
  }
}
