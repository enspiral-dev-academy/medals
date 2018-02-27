import React from 'react'
import {Link} from 'react-router-dom'
import {getQuestions} from '../../actions/eval'
import {connect} from 'react-redux'

class EvalHome extends React.Component {
  componentDidMount () {
    this.props.dispatch(getQuestions(this.props.questionTag))
  }

  render () {
    return (
      <div className='eval-home'>
        <Link to={`/eval/${this.props.questionTag}/question`}>
          <button>Let&rsquo;s Evaluate</button>
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
