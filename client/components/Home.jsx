import React from 'react'
import {Route} from 'react-router-dom'

import evalLink from './eval/EvalLink'

const Home = () => {
  return (
    <div className='home-section'>
      <div className='container'>
        <h1>Home</h1>
        <Route path='/' component={evalLink} />
      </div>
    </div>
  )
}

export default Home
