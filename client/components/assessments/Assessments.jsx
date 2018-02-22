import React from 'react'
import request from 'superagent'

class Assessments extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      topics: []
    }
    this.getList = this.getList.bind(this)
    this.displayList = this.displayList.bind(this)
  }

  componentDidMount () {
    this.getList(this.displayList)
  }

  getList (callback) {
    request
      .get('http://localhost:3000/api/v1/topic')
      .end((err, res) => {
        callback(err, res.body)
      })
  }

  displayList (err, data) {
    if (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }

    this.setState({
      topics: data.topics
    })
  }

  render () {
    return (
      <div className='Assessments'>
        <ul>
          {this.state.topics.map((topic, id) => {
            return (
              <li key={id}>{topic}</li>
            )
          })}
        </ul>
        <p>test</p>
        <p>testb</p>
        
      </div>
    )
  }
}

export default Assessments
