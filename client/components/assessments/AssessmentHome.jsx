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
    this.props.dispatch(getQuestions())
  }

  render () {
    return (
      <div className='AssessmentHome'>
        <Link to='/assessments/:id/:question'><button>Let's Quiz</button></Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    assesmentQuestions: state.assesmentQuestions
  }
}

export default connect(mapStateToProps)(AssessmentHome)
