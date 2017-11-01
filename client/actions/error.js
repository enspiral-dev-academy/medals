export const SHOW_ERROR = 'SHOW_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'

export function showError (errorMessage) {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function clearError () {
  return {
    type: CLEAR_ERROR
  }
}
