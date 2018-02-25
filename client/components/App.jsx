import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import '../styling/main.css'

import Home from './Home'
import Header from './Header'
import SignIn from './SignIn'
import Register from './Register'
import Profile from './Profile'
import ErrorMessage from './ErrorMessage'
import GradProfile from './GradProfile'
import GradProfileEdit from './GradProfileEdit'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Route path='/' component={Header} />
        <Route path='/' component={ErrorMessage} />
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/signin' component={SignIn} />
        <Route path='/profile' component={Profile} />
        <Route path='/grad-profile/edit' component={Header} />
        <Route exact path='/grad-profile' component={GradProfile} />
        <Route exact path='/grad-profile/edit' component={GradProfileEdit} />
      </div>
    </Router>
  )
}

export default App
