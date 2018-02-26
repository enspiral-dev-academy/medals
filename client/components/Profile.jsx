import React from 'react'
import {connect} from 'react-redux'

import {updateProfile} from '../actions/auth'
import {showError, clearError} from '../actions/error'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: props.username,
      firstName: '',
      preferredName: '',
      surname: '',
      email: '',
      profilePic: '',
      bio: '',
      currentPassword: '',
      newPassword: '',
      confirm: '',
      match: false,
      showMatch: false
    }
    this.styles = {
      match: {
        color: 'red'
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render () {
    const {
      username, firstName, preferredName, surname, email, profilePic,
      bio, currentPassword, newPassword, confirm, showMatch, match
    } = this.state
    return (
      <div className='profile'>
        <div className='page-content-wrapper'>
          <div className='content'>
            <form className='pure-form pure-form-stacked'>
              <fieldset>
                <legend>User Profile</legend>

                <label htmlFor='username'>Username: </label>
                <input id='username' name='username' placeholder='username'
                  onChange={this.handleChange} value={username} />

                <label htmlFor='firstName'>First Name: </label>
                <input id='firstName' name='firstName' placeholder='firstName'
                  onChange={this.handleChange} value={firstName} />

                <label htmlFor='preferredName'>Preferred Name: </label>
                <input id='preferredName' name='preferredName' placeholder='preferredName'
                  onChange={this.handleChange} value={preferredName} />

                <label htmlFor='surname'>Surname: </label>
                <input id='surname' name='surname' placeholder='surname'
                  onChange={this.handleChange} value={surname} />

                <label htmlFor='email'>Email: </label>
                <input id='email' name='email' placeholder='email'
                  onChange={this.handleChange} value={email} />

                <label htmlFor='profilePic'>Upload Profile Picture: </label>
                <input id='profilePic' name='profilePic' placeholder='profile pic url here'
                  onChange={this.handleChange} value={profilePic} />

                <label htmlFor='bio'>Bio: </label>
                <textarea id='bio' name='bio' placeholder='your bio here'
                  onChange={this.handleChange} value={bio} />

                {/* new page/container that toggles to open if you want to change password after here? */}
                <label htmlFor='currentPassword'>Current password: </label>
                <input id='currentPassword' name='currentPassword'
                  type='password' placeholder='current password'
                  onChange={this.handleChange} value={currentPassword} />

                <label htmlFor='newPassword'>New password: </label>
                <input id='newPassword' name='newPassword'
                  type='password' placeholder='newPassword'
                  onChange={this.handleChange} value={newPassword} />

                <label htmlFor='confirm'>Confirm new password: </label>
                <input id='confirm' name='confirm'
                  type='password' placeholder='confirm password'
                  onChange={this.handleChange} value={confirm} />

                {showMatch && !match && <span style={this.styles.match}>*</span>}
                <button className='pure-button pure-button-primary'
                  onClick={this.handleSubmit}>Update profile</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    )
  }

  handleChange (e) {
    const {name, value} = e.target
    let match = this.state.match
    match = name === 'newPassword' ? value === this.state.confirm : match
    match = name === 'confirm' ? value === this.state.newPassword : match
    this.setState({
      [name]: value,
      showMatch: this.state.showMatch || name === 'confirm',
      match: match
    })
  }

  handleSubmit (e) {
    const {id, updateProfile} = this.props
    updateProfile(id, this.state)
    e.preventDefault()
    this.setState({
      currentPassword: '',
      newPassword: '',
      confirm: ''
    })
  }
}

function mapStateToProps ({userDetails}) {
  return userDetails || {}
}

function mapDispatchToProps (dispatch) {
  return {
    updateProfile: (id, profile) => {
      if (profile.newPassword === profile.confirm) {
        dispatch(clearError())
        return dispatch(updateProfile({id, ...profile}))
      }
      dispatch(showError('New password and confirmation don\'t match'))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
