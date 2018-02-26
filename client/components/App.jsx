import React from 'react'
import {Route, withRouter} from 'react-router-dom'

import '../styling/main.css'

import Home from './Home'
import Header from './Header'
import SignIn from './SignIn'
import Sprint from './Sprint'
import Profile from './Profile'
import WaitList from './WaitList'
import Register from './Register'
import Assignment from './Assignment'
import GradProfile from './GradProfile'
import GradProfileEdit from './GradProfileEdit'
import ErrorMessage from './ErrorMessage'
import Eval from './eval/Eval'
import EvalHome from './eval/EvalHome'
import EvalMe from './eval/EvalMe'
import CompletedEval from './eval/CompletedEval'

class App extends React.Component {
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
        <Route exact path='/' component={Home} />
        <Route path='/' component={Header} />
        <Route path='/' component={ErrorMessage} />
        <Route path='/signin' component={SignIn} />
        <Route path='/profile' component={Profile} />
        <Route exact path='/eval' component={Eval} />
        <Route exact path='/eval/:tags' component={EvalHome} />
        <Route path='/eval/:tags/question' component={EvalMe} />
        <Route path='/eval/:tags/complete' component={CompletedEval} />
        <Route exact path='/sprints/:number' component={Sprint} />
        <Route path='/sprints/:number/assignments/:id' component={Assignment} />
        <Route exact path='/grad-profile' component={GradProfile} />
        <Route path='/grad-profile/edit' component={GradProfileEdit} />
        <Route path='/waitlist' component={WaitList}/>
        <Route path='/register' component={Register} />
      </div>
    )
  }
}

export default withRouter(App)
