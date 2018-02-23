import React from 'react'
// import {Link} from 'react-router-dom'
import request from 'superagent'

class Assignment extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: []
    }
    this.getTasks = this.getTasks.bind(this)
  }

  componentDidMount () {
    this.getTasks()
  }

  getTasks () {
    const id = this.props.match.params.id
    request.get('/api/v1/sprints/assignments/' + id)
      .then(res => {
        this.setState({
          tasks: res.body
        })
      }
      )
  }

  render () {
    return (
      <div>
        <h1> Assignment! </h1>
        {this.state.tasks.map((task, key) => {
          return (
            <div key={key}>
              <p>
                <input type='checkbox' value={task.id} />
                {task.description}</p>
              <input type='text' /><br/>
              <button type='button'>Save changes</button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Assignment
