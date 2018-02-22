import React from 'react'
import request from 'superagent'

class Sprint extends React.Component {
  constructor (props) {
    super(props)
  }

  getAssignments () {
    const number = this.props.params.number
    request.get('/api/v1/assignments/' + number)
      .then()
  }
  render () {
    return (
      <div>

      </div>
    )
  }
}

export default Sprint
