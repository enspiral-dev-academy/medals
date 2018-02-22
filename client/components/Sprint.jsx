import React from 'react'
import {Link} from 'react-router-dom'
import request from 'superagent'

class Sprint extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      assignments: []
    }
    this.getAssignments = this.getAssignments.bind(this)
  }

  // componentDidMount () {
  //   this.getAssignments()
  // }

  getAssignments () {
    const number = this.props.match.params.number
    request.get('/api/v1/sprints/' + number)
      .then(res => {
        this.setState({
          assignments: res.body.assignments
        })
      }
      )
  }

  render () {
    return (
      <div>
        <button type='button' onClick={this.getAssignments}>Issue Sprint</button>
        <ul>
          {this.state.assignments.map((assignment, key) => {
            return <li key={key}><Link to={`${this.props.match.url}/assignment/${assignment.id}`}>{assignment.name}</Link></li>
          })}
        </ul>
      </div>
    )
  }
}

export default Sprint
