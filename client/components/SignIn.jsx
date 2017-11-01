import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {signIn} from '../actions/auth'
import {clearError} from '../actions/error'
import {withRouter} from 'react-router-dom'

class SignIn extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render () {
    const {username, password} = this.state
    return (
      <div className='sign-in'>
        <div className='page-content-wrapper'>
          <div className='content'>
            <form className='pure-form pure-form-stacked'>
              <fieldset>
                <legend>Sign in</legend>

                <label htmlFor='username'>Username</label>
                <input id='username' name='username' placeholder='username'
                  onChange={this.handleChange} value={username} />

                <label htmlFor='password'>Password</label>
                <input id='password' name='password'
                  type='password' placeholder='password'
                  onChange={this.handleChange} value={password} />

                <button name='sign-in-button' className='pure-button pure-button-primary'
                  onClick={this.handleSubmit}>Sign in</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    )
  }

  handleChange (e) {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit (e) {
    const {username, password} = this.state
    const goToEvents = () => this.props.history.push('/events')
    this.props.signIn(username, password, goToEvents)
    e.preventDefault()
  }
}

SignIn.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  signIn: PropTypes.func
}

function mapDispatchToProps (dispatch) {
  return {
    signIn: (username, password, onSuccess) => {
      dispatch(clearError())
      dispatch(signIn({username, password}, onSuccess))
    }
  }
}

export default withRouter(
  connect(null, mapDispatchToProps)(SignIn)
)
