import React from 'react'
import {Route, Link} from 'react-router-dom'
import {getQuestions} from '../../actions/assessments'
import {connect} from 'react-redux'

class AssessmentHome extends React.Component {
  constructor () {
    super()
    this.state = {}
  }
  componentDidMount () {
    this.props.dispatch(getQuestions(this.props.questionTopic))
  }

  render () {
    return (
      <div className='AssessmentHome'>
        <Link to={`/assessments/${this.props.questionTopic}/:question`}><button>Let's Quiz</button></Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    assessmentQuestions: state.assessmentQuestions,
    questionTopic: state.questionTopic
  }
}

export default connect(mapStateToProps)(AssessmentHome)
