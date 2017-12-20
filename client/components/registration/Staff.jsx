import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {register} from '../../actions/auth'
import {showError, clearError} from '../../actions/error'

class Staff extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fullname: '',
      email: '',
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
    const {fullname, email, username, password, confirm, showMatch, match} = this.state

    return (
      <form>
        <div className='field'>
          <label htmlFor='fullname' className='label'>Full name</label>
          <div className='control has-icons-left'>
            <input id='fullname' className='input' name='fullname'
              placeholder='full name' onChange={this.handleChange} value={fullname} />
            <span className='icon is-small is-left'>
              <i className='fa fa-user' />
            </span>
          </div>
        </div>

        <div className='field'>
          <label htmlFor='email' className='label'>Email</label>
          <div className='control has-icons-left'>
            <input id='email' className='input' name='email'
              placeholder='email' onChange={this.handleChange} value={email} />
            <span className='icon is-small is-left'>
              <i className='fa fa-envelope' />
            </span>
          </div>
        </div>

        <div className='field'>
          <label htmlFor='username' className='label'>Username</label>
          <div className='control has-icons-left'>
            <input id='username' className='input' name='username'
              placeholder='username' onChange={this.handleChange} value={username} />
            <span className='icon is-small is-left'>
              <i className='fa fa-user' />
            </span>
          </div>
        </div>

        <div className='field'>
          <label htmlFor='password' className='label'>Password</label>
          <div className='control has-icons-left'>
            <input id='password' className='input' name='password'
              type='password' placeholder='password'
              onChange={this.handleChange} value={password} />
            <span className='icon is-small is-left'>
              <i className='fa fa-key' />
            </span>
          </div>
        </div>

        <div className='field'>
          <label htmlFor='confirm' className='label'>Confirm password</label>
          <div className='control has-icons-left'>
            <input id='confirm' className='input' name='confirm'
              type='password' placeholder='confirm password'
              onChange={this.handleChange} value={confirm} />
            <span className='icon is-small is-left'>
              <i className='fa fa-key' />
            </span>
            {showMatch && !match && <span style={this.styles.match}>*</span>}
          </div>
        </div>

        <div className='field'>
          <button className='button is-primary'
            onClick={this.handleSubmit}>Register</button>
        </div>
      </form>
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

Staff.propTypes = {
  register: PropTypes.func
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

export default connect(null, mapDispatchToProps)(Staff)
