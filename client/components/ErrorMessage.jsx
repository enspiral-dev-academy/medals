import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {clearError} from '../actions/error'

class ErrorMessage extends React.Component {
  constructor (props) {
    super(props)

    props.history.listen(() => {
      props.dispatch(clearError())
    })
  }

  render () {
    return (
      <div className='error-message red error pl3'>
        {this.props.errorMessage}
      </div>
    )
  }
}

ErrorMessage.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.shape({
    listen: PropTypes.func
  }),
  errorMessage: PropTypes.string
}

function mapStateToProps ({errorMessage}) {
  return {errorMessage}
}

export default withRouter(
  connect(mapStateToProps)(ErrorMessage)
)
