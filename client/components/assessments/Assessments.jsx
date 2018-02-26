import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchList, sendTag} from '../../actions/assessments'

class Assessments extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    this.updateTag = this.updateTag.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(fetchList())
  }

  updateTag (e) {
    const selectedTag = e.target.getAttribute('data-val')
    this.props.dispatch(sendTag(selectedTag))
  }

  render () {
    if (!this.props.assessmentTags) {
      return null
    }
    return (
      <div className='assessments'>
        <ul>
          {this.props.assessmentTags.map((tag, id) => {
            return (
              <Link key={id} to={`/assessments/${tag}`} onClick={this.updateTag}><li data-val={tag}>{tag}</li></Link>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    assessmentTags: state.assessmentTags
  }
}

export default connect(mapStateToProps)(Assessments)
