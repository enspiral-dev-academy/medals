const localStorage = global.window.localStorage
const TOKEN = 'token'

export default {
  saveToken,
  getToken
}

export function saveToken (token) {
  if (!token) {
    localStorage.removeItem(TOKEN)
  } else {
    localStorage.setItem(TOKEN, token)
  }
}

export function getToken () {
  return localStorage.getItem(TOKEN)
}
