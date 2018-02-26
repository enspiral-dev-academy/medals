import React from 'react'
import {Link} from 'react-router-dom'

const CompletedEval = () => {
  return (
    <div className="completed-eval">
      <h2>Well Done, you completed the Evaluation!</h2>
      <Link to='/eval'><button>Evalute Again</button></Link>
    </div>
  )
}

export default CompletedEval
