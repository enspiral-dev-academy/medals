import React from 'react'
import {Route, Link} from 'react-router-dom'


const AssessmentHome = () => {
  return (
    <div className='AssessmentHome'>
      <Link to='/assessments/:id/:question'><button>Let's Quiz</button></Link>
    </div>
  )
}

export default AssessmentHome
