import React from 'react'
import {connect} from 'react-redux'

const BusyIndicator = ({busy}) => {
  return (
    <div className='busy-indicator'>
      {busy && <img src='/animated-circle.gif' />}
    </div>
  )
}

function mapStateToProps ({busy}) {
  return {busy}
}

export default connect(mapStateToProps)(BusyIndicator)
