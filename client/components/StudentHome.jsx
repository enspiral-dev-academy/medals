import React from 'react'
import request from 'superagent'
import {Link} from 'react-router-dom'

class StudentHome extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      sprints: []
    }
  }

  componentDidMount () {
    this.getSprints()
    // this.setState({
    //   sprints: [
    //   ]
    // })
  }

  getSprints () {
    request.get('/api/v1/sprints/')
      .then(res => {
        this.setState({
          sprints: res.body
        })
      })
  }

  render () {
    return (
      <div className='home section'>
        <div className='container'>
          <h2>Phase 0</h2>
          <ul>
            {this.state.sprints.map((sprint, key) => {
              return (
                <li key={key}>
                  <Link to={`/sprint/${sprint.id}`}>Sprint {sprint.number}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default StudentHome
