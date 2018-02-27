import React from 'react'
import {connect} from 'react-redux'

import {getAllUsers, updateUserApprovals} from '../actions/auth'

export class WaitList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: []
    }
    this.flipCheckbox = this.flipCheckbox.bind(this)
    this.submitChanges = this.submitChanges.bind(this)
  }
  componentDidMount () {
    this.props.dispatch(getAllUsers())
      .then(() => {
        this.setState({
          users: this.props.allUsers.map(user => ({
            id: user.id,
            username: user.username,
            isApproved: user.isApproved
          }))
        })
      })
  }

  flipCheckbox (e) {
    const newUsers = this.state.users.map(user => {
      if (user.id === Number(e.target.id)) {
        return {
          ...user,
          isApproved: e.target.checked
        }
      }
      return user
    })
    this.setState({
      users: newUsers
    })
  }

  submitChanges () {
    this.props.dispatch(updateUserApprovals(this.state))
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
                    <input type='checkbox' id={user.id} onClick = {this.flipCheckbox}/>
                  </td>
                </tr>
              )
            })
            }
          </tbody>
        </table>
        <button type='submit' onClick={this.submitChanges}> Update Approvals </button>
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
