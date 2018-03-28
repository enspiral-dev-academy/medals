import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getQuestions} from '../../actions/eval'

class EvalHome extends React.Component {
  componentDidMount () {
    this.props.dispatch(getQuestions(this.props.questionTag))
  }

  render () {
    return (
      <div className='eval-home'>
        <Link className='button'
          to={`/eval/${this.props.questionTag}/question`}>
          Let&apos;s Evaluate
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    evalQuestions: state.evalQuestions,
    questionTag: state.questionTag
  }
}

export default connect(mapStateToProps)(EvalHome)
