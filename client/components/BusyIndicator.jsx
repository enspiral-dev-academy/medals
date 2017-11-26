import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const BusyIndicator = ({busy}) => {
  return (
    <div className='navbar-item busy-indicator'>
      {busy && <img src='/img/animated-circle.gif' />}
    </div>
  )
}

function mapStateToProps ({busy}) {
  return {busy}
}

BusyIndicator.propTypes = {
  busy: PropTypes.bool
}

export default connect(mapStateToProps)(BusyIndicator)
