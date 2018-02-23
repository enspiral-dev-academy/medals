import React from 'react'
import {Route, withRouter} from 'react-router-dom'

import '../styling/main.css'

import Home from './Home'
import Header from './Header'
import SignIn from './SignIn'
import Profile from './Profile'
import Register from './Register'
import WaitList from './WaitList'
import ErrorMessage from './ErrorMessage'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.setToken = this.setToken.bind(this)
  }
  componentDidMount () {
    this.setToken()
  }

  setToken () {
    const queryString = this.props.location.search
    const token = new URLSearchParams(queryString).get('token')
    if (token) {
      localStorage.setItem('token', token)
    }
  }

  render () {
    return (
      <div className='app'>
        <Route path='/' component={Header} />
        <Route path='/' component={ErrorMessage} />
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/signin' component={SignIn} />
        <Route path='/profile' component={Profile} />
        <Route path='/waitlist' component={WaitList}/>
      </div>
    )
  }
}

export default withRouter(App)
