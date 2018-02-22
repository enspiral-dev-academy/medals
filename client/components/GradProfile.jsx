import React from 'react'
import {Link} from 'react-router-dom'

const GradProfile = () => {
  return (
    <div className='grad-profile'>
      <div className='container'>
        <h1>Name</h1>
        <Link to='/grad-profile/edit'><button>
          Edit Profile
        </button></Link>
      </div>
    </div>
  )
}

export default GradProfile
