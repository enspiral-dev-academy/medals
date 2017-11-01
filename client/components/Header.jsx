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
    this.handleLogOff = this.handleLogOff.bind(this)
  }

  componentDidMount () {
    // populate the store with user details if an auth token is in localStorage
    if (this.props.signedIn && !this.props.userDetails) {
      const token = getAuthToken()
      this.props.dispatch(getUserDetails(token.id))
    }
  }

  render () {
    const {signedIn, atHome, atEvents, atProfile} = this.props
    return (
      <div className='header'>
        <div className='home-menu pure-menu pure-menu-horizontal pure-menu-fixed'>
          <Link to='/' className='pure-menu-heading'>Reka</Link>
          <BusyIndicator />
          <ul className='pure-menu-list'>
            <li className={`pure-menu-item ${atHome && 'pure-menu-selected'}`}>
              <Link to='/' className='home pure-menu-link'>Home</Link>
            </li>
            {!signedIn && <li className='pure-menu-item'>
              <Link to='/register' className='register pure-menu-link'>Register</Link>
            </li>}
            {!signedIn && <li className='pure-menu-item'>
              <Link to='/signin' className='signin pure-menu-link'>Sign in</Link>
            </li>}
            {signedIn && <li className={`pure-menu-item ${atEvents && 'pure-menu-selected'}`}>
              <Link to='/events' className='events pure-menu-link'>Events</Link>
            </li>}
            {signedIn && <li className={`pure-menu-item ${atProfile && 'pure-menu-selected'}`}>
              <Link to='/profile' className='profile pure-menu-link'>Profile</Link>
            </li>}
            {signedIn && <li className='pure-menu-item'>
              <a href='#' className='logoff pure-menu-link' onClick={this.handleLogOff}>Log off</a>
            </li>}
          </ul>
        </div>
      </div>
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
  atEvents: PropTypes.bool,
  atProfile: PropTypes.bool
}

function mapStateToProps ({userDetails}, ownProps) {
  const path = ownProps.history.location.pathname
  return {
    atHome: path === '/',
    atEvents: path.includes('events'),
    atProfile: path.includes('profile'),
    signedIn: isAuthenticated(),
    userDetails
  }
}

export default withRouter(
  connect(mapStateToProps)(Header)
)
