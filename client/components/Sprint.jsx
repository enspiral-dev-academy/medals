import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Sprint extends React.Component {
  render () {
    const targetSprint = this.props.sprints.find(sprint => {
      return sprint.id === Number(this.props.match.params.number)
    })
    return (
      <div>
        <ul>
          {targetSprint.assignments.map((assignment, key) => {
            return <li key={key}>
              <Link
                to={`${this.props.match.url}/assignments/${assignment.id}`}>{assignment.title}
              </Link></li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sprints: state.sprints
  }
}

export default connect(mapStateToProps)(Sprint)
