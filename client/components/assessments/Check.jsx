import React from 'react'

const Check = ({feedback}) => {
  return (
    <div>
      <h3>{feedback.check}</h3>
      <p>{feedback.reason}</p>
    </div>
  )
}

export default Check
