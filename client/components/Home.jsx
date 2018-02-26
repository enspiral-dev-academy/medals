import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getSprint} from '../actions/sprints'

class Home extends React.Component {
  componentDidMount () {
    this.getSprintInfo()
  }

  getSprintInfo () {
    this.props.dispatch(getSprint())
  }

  render () {
    return (
      <div className='home section'>
        <div className='container'>
          <h1>Home</h1>
          
          <h2>Phase 0</h2>
          <ul>
            {this.props.sprints.map((sprint, key) => {
              return (
                <li key={key}>
                  <Link to={`/sprints/${sprint.id}`}>Sprint {sprint.number}</Link>
                </li>
              )
            })}
          </ul>
          
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

export default connect(mapStateToProps)(Home)
