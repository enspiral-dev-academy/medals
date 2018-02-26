import React from 'react'
import {Route} from 'react-router-dom'

import AssessmentLink from './assessments/AssessmentLink'

const Home = () => {
  return (
    <div className='home section'>

      <div className='container'>
        <h1>Home</h1>
        <Route path='/' component={AssessmentLink} />
      </div>

    </div>
  )
}

export default Home
