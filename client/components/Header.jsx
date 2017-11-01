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
    const {signedIn, atHome, atProfile} = this.props
    return (
      <div className='header'>
        <BusyIndicator />
        <ul>
          <li className={`menu-item ${atHome && 'menu-selected'}`}>
            <Link to='/' className='home menu-link'>Home</Link>
          </li>
          {!signedIn && <li className='menu-item'>
            <Link to='/register' className='register menu-link'>Register</Link>
          </li>}
          {!signedIn && <li className='menu-item'>
            <Link to='/signin' className='signin menu-link'>Sign in</Link>
          </li>}
          {signedIn && <li className={`menu-item ${atProfile && 'menu-selected'}`}>
            <Link to='/profile' className='profile menu-link'>Profile</Link>
          </li>}
          {signedIn && <li className='menu-item'>
            <a href='#' className='logoff menu-link' onClick={this.handleLogOff}>Log off</a>
          </li>}
        </ul>
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
  atProfile: PropTypes.bool
}

function mapStateToProps ({userDetails}, ownProps) {
  const path = ownProps.history.location.pathname
  return {
    atHome: path === '/',
    atProfile: path.includes('profile'),
    signedIn: isAuthenticated(),
    userDetails
  }
}

export default withRouter(
  connect(mapStateToProps)(Header)
)
