import React from 'react'
import {Link} from 'react-router-dom'

import Assessments from './Assessments'

const AssessmentLink = () => {
  return (

    <div className='assessmentLink'>
      <Link to='/assessments' component={Assessments}>Assessments</Link>
    </div>

  )
}

export default AssessmentLink
