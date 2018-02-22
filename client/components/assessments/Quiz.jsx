import React from 'react'

import sampleData from './questions.json'

// mock data
const sampleQues = sampleData.questions

class Quiz extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      question: sampleQues,
      answer: '',
      key: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (evt) {
    const selectedAnswer = evt.target.getAttribute('data-ans')
    this.setState({
      answer: selectedAnswer,
      key: evt.target.value
    })
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
                <input type='radio' name='answer'
                  value={answer.key} data-ans={answer.ans}
                  onChange={this.handleChange}
                  checked={this.state.answer === answer.ans} />
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
