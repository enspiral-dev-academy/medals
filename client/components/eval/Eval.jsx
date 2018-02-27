import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchList, sendTag} from '../../actions/eval'

class Eval extends React.Component {
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
    if (!this.props.evalTags) {
      return null
    }
    return (
      <div className='eval'>
        <ul>
          {this.props.evalTags.map((tag, id) => {
            return (
              <Link key={id} to={`/eval/${tag}`} onClick={this.updateTag}>
                <li data-val={tag}>{tag}</li>
              </Link>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    evalTags: state.evalTags.sort()
  }
}

export default connect(mapStateToProps)(Eval)
