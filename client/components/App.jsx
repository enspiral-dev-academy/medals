import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import '../styling/main.css'

import Home from './Home'
import Header from './Header'
import SignIn from './SignIn'
import Register from './Register'
import Profile from './Profile'
import ErrorMessage from './ErrorMessage'
import Eval from './eval/Eval'
import EvalHome from './eval/EvalHome'
import EvalMe from './eval/EvalMe'
import CompletedEval from './eval/CompletedEval'

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
        <Route exact path='/eval' component={Eval} />
        <Route exact path='/eval/:tags' component={EvalHome} />
        <Route exact path='/eval/:tags/question' component={EvalMe} />
        <Route exact path='/eval/:tags/complete' component={CompletedEval} />
      </div>
    </Router>
  )
}

export default App
