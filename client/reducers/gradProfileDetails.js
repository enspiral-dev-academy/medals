const initialState = {

}

const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_GRAD_PROFILE' :
      return {
        userData: action

      }
    case 'REQUEST_GRAD_PROFILE' :
      return {

      }
    default :
      return state
  }
}

export default getUserReducer
