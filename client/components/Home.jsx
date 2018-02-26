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
