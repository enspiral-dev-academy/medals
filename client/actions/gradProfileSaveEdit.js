import request from '../lib/api'
import {showError} from './error'

export const REQUEST_SAVE_GRAD_PROFILE = 'REQUEST_SAVE_GRAD_PROFILE'
export const RECEIVE_SAVE_GRAD_PROFILE = 'RECEIVE_SAVE_GRAD_PROFILE'

export const requestSaveGradProfile = () => {
  return {
    type: REQUEST_SAVE_GRAD_PROFILE
  }
}

export const receiveSaveGradProfile = (userData) => {
  return {
    type: RECEIVE_SAVE_GRAD_PROFILE,
    userData
  }
}

export function saveGradProfile (userData) {
  // Spike, adds http to start of links without http/https
  userData.githubLink = checkLinksForHTTP(userData.githubLink)
  userData.linkedinLink = checkLinksForHTTP(userData.linkedinLink)

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

function checkLinksForHTTP (link) {
  if (link.startsWith('https://') || link.startsWith('http://')) {
    return link
  } else {
    return 'http://' + link
  }
}
