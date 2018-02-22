import React from 'react'

const Answers = ({answer}) => {
  return (
    <div>
      <div>
        <input type='radio' name='answer' value={answer.key} />
        <label>&nbsp;{answer.ans}</label>
      </div>
    </div>
  )
}

export default Answers
