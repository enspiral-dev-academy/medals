import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='home section'>
      <div className='container'>
        <h1>Home</h1>
        <Link to='/grad-profile'><button>
          Grad Profile
        </button></Link>
      </div>
    </div>
  )
}

export default Home
