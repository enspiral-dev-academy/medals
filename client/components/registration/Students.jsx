import React from 'react'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'

// import {register} from '../../actions/auth'
// import {showError, clearError} from '../../actions/error'

const Students = (props) => {
  return (
    <form>
      <div className='field'>
        <button className='button is-primary GHlogin'><a href='http://localhost:3000/auth/github'>Continue with GitHub</a></button>
      </div>
    </form>
  )
}

export default connect()(Students)
