import React from 'react'

import Answers from './Answers'

import sampleData from './questions.json'

// mock data
const sampleQues = sampleData.questions


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
        <h2>{this.state.question[0].question}</h2>
        <form>
          {this.state.question[0].choices.map((answer, idx) => {
            return (
              <div key={idx}>
                <Answers answer={answer} />
                {/* <input type='radio' value={answer.key} /> */}

              </div>)
          })}
        </form>
        <button type='button'>Submit Answer</button>&nbsp;
        <button type='button'>Next Question</button>
      </div>
    )
  }
}

export default Quiz
