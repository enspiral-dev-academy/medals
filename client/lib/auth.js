import decode from 'jwt-decode'

import {saveToken, getToken} from './token'

export function isAuthenticated () {
  const authToken = getToken()

  if (authToken) {
    const payload = decode(authToken)
    const expiry = payload.exp

    if (expiry < new Date().getTime() / 1000) {
      logOff()
      return false
    }
    return true
  } else {
    return false
  }
}

export function saveAuthToken (authToken) {
  saveToken(authToken)
  return decode(authToken)
}

export function getAuthToken () {
  const authToken = getToken()
  return authToken ? decode(authToken) : null
}

export function getEncodedToken () {
  return getToken()
}

export function logOff () {
  saveToken(null)
}
