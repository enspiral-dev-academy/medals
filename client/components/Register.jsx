import React from 'react'
import PropTypes from 'prop-types'
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
        <section className='section'>
          <div className='content'>
            <h1>Registration</h1>
          </div>

          <form>
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
        </section>
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

Register.propTypes = {
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

export default connect(null, mapDispatchToProps)(Register)
