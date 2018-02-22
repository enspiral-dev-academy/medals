import React from 'react'

const Answers = ({answer}) => {
  return (
    <div>
      <input type='radio' value={answer.key} /><p>{answer.text}</p>
    </div>
  )
}

export default Answers
