import React from 'react'
import {connect} from 'react-redux'
import {Route, Link, withRouter} from 'react-router-dom'

import evalLink from './eval/EvalLink'
import {getSprint} from '../actions/sprints'
import request from '../lib/api.js'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount () {
    this.getSprintInfo()
  }

  getSprintInfo () {
    this.props.dispatch(getSprint())
  }

  handleClick (e) {
    const sprintId = e.target.id
    request('post', '/sprints', {id: sprintId})
      .then(() => this.props.history.push(`/sprints/${sprintId}`))
  }

  render () {
    return (
      <div className='home section'>
        <div className='container'>
          <h1>Home</h1>
          <h2>Phase 0</h2>
          <ul>
            {this.props.sprints.map(sprint => {
              return (
                <li key={sprint.id}>
                  <Link to={`/sprints/${sprint.id}`}>
                    Sprint {sprint.number}
                  </Link>{' '}
                  <button id={sprint.id} className='button'
                    onClick={this.handleClick}>
                    Issue sprint {sprint.number} tasks
                  </button>
                </li>
              )
            })}
          </ul>

          <h2>Eval(me)</h2>
          <Route path='/' component={evalLink} />

          <h2>My Grad Profile</h2>
          <Link to='/grad-profile'><button>Grad Profile</button></Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sprints: state.sprints
  }
}

export default withRouter(
  connect(mapStateToProps)(Home)
)
