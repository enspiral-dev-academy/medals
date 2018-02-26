import React from 'react'
import {connect} from 'react-redux'

// TODO: Figure out how to use .env on the client side
const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://medals.devacademy.co.nz'
  : 'http://localhost:3000'

const Students = (props) => {
  return (
    <form>
      <div className='field'>
        <button className='button is-primary gh-login'>
          <a href={`${baseUrl}/auth/github`}>Continue with GitHub</a>
        </button>
      </div>
    </form>
  )
}

export default connect()(Students)
