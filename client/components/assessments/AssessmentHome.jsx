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
    this.props.dispatch(getQuestions(this.props.questionTag))
  }

  render () {
    return (
      <div className='AssessmentHome'>
        <Link to={`/assessments/${this.props.questionTag}/question`}><button>Let's Quiz</button></Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    assessmentQuestions: state.assessmentQuestions,
    questiontag: state.questionTag
  }
}

export default connect(mapStateToProps)(AssessmentHome)
