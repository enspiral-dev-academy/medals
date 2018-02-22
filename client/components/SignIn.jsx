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
        <section className='section'>
          <div className='content'>
            <h1>Student Sign-in</h1>
            <button className='button is-primary'><a href='http://localhost:3000/auth/github'>Continue with GitHub</a></button>
            <br/>
          </div>

          <div className='content'>
            <h1>Sign-in (for Staff or Employers)</h1>
          </div>
          <form>
            <div className='field'>
              <label htmlFor='username' className='label'>Username</label>
              <div className='control has-icons-left'>
                <input id='username' name='username' placeholder='username'
                  className='input' onChange={this.handleChange} value={username} />
                <span className='icon is-small is-left'>
                  <i className='fa fa-user' />
                </span>
              </div>
            </div>

            <div className='field'>
              <label htmlFor='password' className='label'>Password</label>
              <div className='control has-icons-left'>
                <input id='password' name='password' className='input'
                  type='password' placeholder='password'
                  onChange={this.handleChange} value={password} />
                <span className='icon is-small is-left'>
                  <i className='fa fa-key' />
                </span>
              </div>
            </div>

            <div className='field'>
              <button name='sign-in-button' className='button is-primary'
                onClick={this.handleSubmit}>Sign in</button>
            </div>
          </form>
        </section>
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
