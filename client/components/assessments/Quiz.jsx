import React from 'react'

import sampleData from './questions.json'

// mock data
const sampleQues = sampleData.questions

class Quiz extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      question: sampleQues
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit () {

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
                <input type='radio' name='answer' value={answer.key} />
                <label>&nbsp;{answer.ans}</label>
              </div>)
          })}
        </form>
        <button type='button' onClick={this.handleSubmit}>Submit Answer</button>&nbsp;
        <button type='button'>Next Question</button>
      </div>
    )
  }
}

export default Quiz
