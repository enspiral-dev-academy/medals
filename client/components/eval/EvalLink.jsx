import React from 'react'
import {Link} from 'react-router-dom'

import Eval from './Eval'

const EvalLink = () => {
  return (

    <div className='eval-link'>
      <Link to='/eval' component={Eval}>EvalSelf</Link>
    </div>

  )
}

export default EvalLink
