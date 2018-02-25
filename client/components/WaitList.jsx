import React from 'react'
import {connect} from 'react-redux'

import {getAllUsers} from '../actions/auth'

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
              <th> Approval Status </th>
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

export default connect(mapStateToProps)(WaitList)
