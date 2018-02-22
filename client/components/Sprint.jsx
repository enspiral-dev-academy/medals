import React from 'react'
import {Link} from 'react-router-dom'
// import request from 'superagent'

class Sprint extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      assignments: []
    }
    this.getAssignments = this.getAssignments.bind(this)
  }

  getAssignments () {
    // const number = this.props.params.number
    // request.get('/api/v1/assignments/' + number)
    //   .then()
    this.setState({
      assignments: [
        {id: 1, title: 'kimmis cookies'},
        {id: 2, title: 'steves snacks'},
        {id: 3, title: 'stinas smokes'},
        {id: 4, title: 'julias jokes'}
      ]
    })
  }

  render () {
    return (
      <div>
        <button type='button' onClick={this.getAssignments}>Issue Assignments</button>
        <ul>
          {this.state.assignments.map((assignment, key) => {
            return <li key={key}><Link to={`${this.props.match.url}/assignment/${assignment.id}`}>{assignment.title}</Link></li>
          })}
        </ul>
      </div>
    )
  }
}

export default Sprint
