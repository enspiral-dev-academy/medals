import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import '../styling/main.css'

import Home from './Home'
import Header from './Header'
import SignIn from './SignIn'
import Register from './Register'
import Profile from './Profile'
import ErrorMessage from './ErrorMessage'
import Assessments from './assessments/Assessments'
import AssessmentHome from './assessments/AssessmentHome'
import Quiz from './assessments/Quiz'
import CompletedEval from './assessments/CompletedEval'

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
        <Route exact path='/assessments' component={Assessments} />
        <Route exact path='/assessments/:topic' component={AssessmentHome} />
        <Route exact path='/assessments/:id/question' component={Quiz} />
        <Route exact path='/assessments/:id/complete' component={CompletedEval} />
      </div>
    </Router>
  )
}

export default App
