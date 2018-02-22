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
    // this.getSprints()
    this.setState({
      sprints: [
        {id: 1, number: 0},
        {id: 2, number: 1},
        {id: 3, number: 2},
        {id: 4, number: 3},
        {id: 5, number: 4},
        {id: 6, number: 5},
        {id: 7, number: 6},
        {id: 8, number: 7},
        {id: 9, number: 8},
        {id: 10, number: 9}
      ]
    })
  }

  getSprints () {
    request.get('')
      .then(sprints => {
        this.setState({
          sprints: sprints
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
                  <Link to={`/sprint/${sprint.number}`}>Sprint {sprint.number}</Link>
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
