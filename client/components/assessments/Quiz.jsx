import React from 'react'

import Check from './Check'

import sampleData from './questions.json'

// mock data
const sampleQues = sampleData.questions

class Quiz extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      question: sampleQues,
      questionIndx: 0,
      answer: '',
      key: '',
      reason: '',
      check: '',
      disabled: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.displayNext = this.displayNext.bind(this)
  }
  handleChange (evt) {
    const selectedAnswer = evt.target.getAttribute('data-ans')
    const reasoning = evt.target.getAttribute('data-fbk')
    this.setState({
      answer: selectedAnswer,
      key: evt.target.value,
      reason: reasoning
    })
  }

  handleSubmit () {
    if (Number(this.state.key) === 1) {
      this.setState({
        check: 'Correct!',
        disabled: 'disabled'
      })
    } else {
      this.setState({
        check: 'Not Quite',
        disabled: 'disabled'
      })
    }
  }
  displayNext () {
    if (sampleQues.length === this.state.questionIndx + 1) {
      this.props.history.push('complete')
    }
    this.setState({
      questionIndx: this.state.questionIndx + 1,
      check: '',
      disabled: ''

    })
  }

  render () {
    return (
      <div className='Quiz'>
        <h2>{this.state.question[this.state.questionIndx].question}</h2>
        <form>

          {this.state.question[this.state.questionIndx].choices.map((answer, idx) => {
            return (
              <div key={idx}>
                <input readOnly type='radio' name='answer'
                  value={answer.key} data-ans={answer.ans}
                  data-fbk={answer.fbk}
                  onChange={this.handleChange}
                  checked={this.state.answer === answer.ans}
                  disabled={(this.state.disabled) ? 'disabled' : ''} />
                <label>&nbsp;{answer.ans}</label>
              </div>)
          })}
        </form>
        {this.state.check && <Check feedback={this.state} displayNext={this.displayNext} />}
        <button type='button' onClick={this.handleSubmit}>Submit Answer</button>
      </div>
    )
  }
}

export default Quiz
