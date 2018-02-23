import React from 'react'
import {connect} from 'react-redux'

// import db from '../../server/db/users'
import {getAllUsers} from '../actions/auth'
// import {showError, clearError} from '../actions/error'

class WaitList extends React.Component {
  componentDidMount () {
    this.props.dispatch(getAllUsers())
  }

  render () {
    if (!this.props.allUsers) {
      return null
    }
    return (
      <div className='waitlist'>
        <table>
          <thead>
            <tr>
              <th> GitHub ID </th>
              <th> Username </th>
              <th> Appraval Status </th>
            </tr>
          </thead>
          <tbody>
            {this.props.allUsers.map(user => {
              return (
                <tr key = {user.id}>
                  <td> {user.ghid} </td>
                  <td> {user.username} </td>
                  <td>
                    <input type='checkbox' />
                  </td>
                </tr>
              )
            })
            }
          </tbody>

        </table>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    allUsers: state.allUsers || []
  }
}

// function mapDispatchToProps (dispatch) {
//   return console.log('test')
//   // updateProfile: (id, username, currentPassword, newPassword, confirm) => {
//   //   if (newPassword === confirm) {
//   //     dispatch(clearError())
//   //     return dispatch(updateProfile({id, username, currentPassword, newPassword}))
//   //   }
//   // //   dispatch(showError('New password and confirmation don\'t match'))
//   // }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(WaitList)

export default connect(mapStateToProps)(WaitList)
