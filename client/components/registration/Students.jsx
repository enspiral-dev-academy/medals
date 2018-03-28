import React from 'react'
import {connect} from 'react-redux'

import baseUrl from '../../../shared/baseUrl'

const Students = (props) => {
  return (
    <form>
      <div className='field'>
        <a className='button is-primary gh-login'
          href={`${baseUrl}/auth/github`}>Continue with GitHub</a>
      </div>
    </form>
  )
}

export default connect()(Students)
