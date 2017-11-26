import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'

import {getUserDetails, logOff} from '../actions/auth'
import {isAuthenticated, getAuthToken} from '../lib/auth'
import BusyIndicator from './BusyIndicator'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      burgerIsActive: false
    }
    this.handleLogOff = this.handleLogOff.bind(this)
    this.toggleBurgerActive = this.toggleBurgerActive.bind(this)
  }

  componentDidMount () {
    // populate the store with user details if an auth token is in localStorage
    if (this.props.signedIn && !this.props.userDetails) {
      const token = getAuthToken()
      this.props.dispatch(getUserDetails(token.id))
    }
  }

  toggleBurgerActive () {
    this.setState({burgerIsActive: !this.state.burgerIsActive})
  }

  render () {
    const {burgerIsActive} = this.state
    const {signedIn, atHome, atProfile, atRegister, atSignIn} = this.props
    return (
      <nav className='navbar header is-fixed-top' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link className='navbar-item' to='/'>
            <img src='/img/medals-named-logo.png'
              alt="Medals: Enspiral Dev Academy's Learning Management System"
              height='28' />
          </Link>
          <BusyIndicator />
          <button className={`button navbar-burger ${burgerIsActive && 'is-active'}`} onClick={this.toggleBurgerActive}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={`navbar-menu ${burgerIsActive && 'is-active'}`}>
          <div className='navbar-start'>
            <Link to='/'
              className={`home navbar-item ${atHome && 'is-active'}`}>Home</Link>
          </div>
          <div className='navbar-end'>
            {!signedIn && <Link to='/register'
              className={`register navbar-item ${atRegister && 'is-active'}`}>Register</Link>}
            {!signedIn && <Link to='/signin'
              className={`signin navbar-item ${atSignIn && 'is-active'}`}>Sign in</Link>}
            {signedIn && <Link to='/profile'
              className={`profile navbar-item ${atProfile && 'is-active'}`}>Profile</Link>}
            {signedIn && <a href='#'
              className={`logoff navbar-item ${atProfile && 'is-active'}`}
              onClick={this.handleLogOff}>Log off</a>}
          </div>
        </div>
      </nav>
    )
  }

  handleLogOff (e) {
    const {dispatch, history} = this.props
    e.preventDefault()
    dispatch(logOff())
    history.push('/')
  }
}

Header.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.shape({
    listen: PropTypes.func
  }),
  signedIn: PropTypes.bool,
  userDetails: PropTypes.object,
  atHome: PropTypes.bool,
  atProfile: PropTypes.bool,
  atRegister: PropTypes.bool,
  atSignIn: PropTypes.bool
}

function mapStateToProps ({userDetails}, ownProps) {
  const path = ownProps.history.location.pathname
  return {
    atHome: path === '/',
    atRegister: path === '/register',
    atSignIn: path === '/signin',
    atProfile: path.includes('profile'),
    signedIn: isAuthenticated(),
    userDetails
  }
}

export default withRouter(
  connect(mapStateToProps)(Header)
)
