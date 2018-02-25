import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchList, sendTopic} from '../../actions/assessments'

class Assessments extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    this.updateTopic = this.updateTopic.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(fetchList())
  }

  updateTopic (e) {
    const selectedTopic = e.target.getAttribute('data-val')
    this.props.dispatch(sendTopic(selectedTopic))
  }

  render () {
    if (!this.props.assessmentTopics) {
      return null
    }
    return (
      <div className='Assessments'>
        <ul>
          {this.props.assessmentTopics.map((topic, id) => {
            return (
              <Link key={id} to={`/assessments/${topic}`} onClick={this.updateTopic}><li data-val={topic}>{topic}</li></Link>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    assessmentTopics: state.assessmentTopics
  }
}

export default connect(mapStateToProps)(Assessments)
