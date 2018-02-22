import React from 'react'

import Answers from './Answers'

import sampleData from './questions.json'

// mock data
const answers = [{
  id: 1,
  key: 0,
  text: 'answer text'}
]

const sampleQues = sampleData.questions
// console.log(sampleQues)

class Quiz extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      question: sampleQues
    }
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
