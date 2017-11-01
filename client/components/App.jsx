import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import '../styling/main.css'

import Home from './Home'
import Header from './Header'
import SignIn from './SignIn'
import Register from './Register'
import Profile from './Profile'
import ErrorMessage from './ErrorMessage'

const App = () => {
  return (
    <Router>
      <div>
        <Route path='/' component={Header} />
        <Route path='/' component={ErrorMessage} />
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/signin' component={SignIn} />
        <Route path='/profile' component={Profile} />
      </div>
    </Router>
  )
}

export default App
