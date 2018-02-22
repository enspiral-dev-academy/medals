const initialState = {
  currentUser: {name: 'Ethan', testData: true}
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

    case 'EDIT_GRAD_PROFILE' :
      return {currentUser: action.currentUser}
    default :
      return state
  }
}

export default getUserReducer
