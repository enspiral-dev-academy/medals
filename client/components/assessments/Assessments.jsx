import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchList} from '../../actions/assessments'

class Assessments extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    this.props.dispatch(fetchList())
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
              <Link key={id} to={`/assessments/${topic}`}><li>{topic}</li></Link>
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
