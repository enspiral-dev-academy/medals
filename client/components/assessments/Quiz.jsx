import React from 'react'

import Answers from './Answers'

// mock data
const answers = [{
  id: 1,
  key: 0,
  text: 'answer text'}
]

class Quiz extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div className='Quiz'>
        {/* will be from props */}
        <h2>Question</h2>
        <ul>
          {answers.map(answer => {
            return (
              <div key={answer.id}>
                <Answers answer={answer} />
              </div>)
          })}
        </ul>
      </div>
    )
  }
}

export default Quiz
