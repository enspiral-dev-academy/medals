import React from 'react'

const Check = ({feedback}) => {
  return (
    <div>
      <h3>{feedback.check}</h3>
      <p>{feedback.reason}</p>
      <button type='button'>Next Question</button>
    </div>
  )
}

export default Check
