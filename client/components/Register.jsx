import React from 'react'
import {connect} from 'react-redux'

import {register} from '../actions/auth'
import {showError, clearError} from '../actions/error'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
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
    const {username, password, confirm, showMatch, match} = this.state
    return (
      <div className='register'>
        <div className='page-content-wrapper'>
          <div className='content'>
            <form className='pure-form pure-form-stacked'>
              <fieldset>
                <legend>Register</legend>

                <label htmlFor='username'>Username</label>
                <input id='username' name='username' placeholder='username'
                  onChange={this.handleChange} value={username} />

                <label htmlFor='password'>Password</label>
                <input id='password' name='password'
                  type='password' placeholder='password'
                  onChange={this.handleChange} value={password} />

                <label htmlFor='confirm'>Confirm password</label>
                <input id='confirm' name='confirm'
                  type='password' placeholder='confirm password'
                  onChange={this.handleChange} value={confirm} />

                {showMatch && !match && <span style={this.styles.match}>*</span>}
                <button className='pure-button pure-button-primary'
                  onClick={this.handleSubmit}>Register</button>
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
    match = name === 'password' ? value === this.state.confirm : match
    match = name === 'confirm' ? value === this.state.password : match
    this.setState({
      [name]: value,
      showMatch: this.state.showMatch || name === 'confirm',
      match: match
    })
  }

  handleSubmit (e) {
    const {register} = this.props
    const {username, password, confirm} = this.state
    register(username, password, confirm)
    e.preventDefault()
  }
}

function mapDispatchToProps (dispatch) {
  return {
    register: (username, password, confirm) => {
      if (password === confirm) {
        dispatch(clearError())
        return dispatch(register({username, password}))
      }
      dispatch(showError('Password and confirmation don\'t match'))
    }
  }
}

export default connect(null, mapDispatchToProps)(Register)
