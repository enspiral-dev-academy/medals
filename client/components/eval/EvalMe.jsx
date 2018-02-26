import React from 'react'
import {connect} from 'react-redux'

import Check from './Check'

import sampleData from './questions.json'

// mock data
// const sampleQues = sampleData.questions

class EvalMe extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // question: sampleQues,
      questionIndx: 0,
      answer: '',
      key: '',
      reason: '',
      check: '',
      disabled: '',
      enableButton: 'disabled'
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
      reason: reasoning,
      enableButton: ''
    })
  }

  handleSubmit () {
    if (Number(this.state.key) === 1) {
      this.setState({
        check: 'Correct!',
        disabled: 'disabled',
        enableButton: 'disabled'
      })
    } else {
      this.setState({
        check: 'Not Quite',
        disabled: 'disabled',
        enableButton: 'disabled'
      })
    }
  }
  displayNext () {
    if (this.props.evalQuestions.length === this.state.questionIndx + 1) {
      this.props.history.push('complete')
    }
    this.setState({
      questionIndx: this.state.questionIndx + 1,
      check: '',
      disabled: ''
    })
  }

  render () {
    console.log(this.props.evalQuestions)
    console.log(this.props)
    return (
      <div className='eval-me'>
        <h2>{this.props.evalQuestions[this.state.questionIndx].question}</h2>
        <form>

          {this.props.evalQuestions[this.state.questionIndx].responses.map((answer) => {
            return (
              <div key={answer.id}>
                <input readOnly type='radio' name='answer'
                  value={answer.key} data-ans={answer.response}
                  data-fbk={answer.reason}
                  onChange={this.handleChange}
                  checked={this.state.answer === answer.response}
                  disabled={(this.state.disabled) ? 'disabled' : ''} />
                <label>&nbsp;{answer.response}</label>
              </div>)
          })}
        </form>
        {this.state.check && <Check feedback={this.state} displayNext={this.displayNext} />}
        <button type='button' disabled={this.state.enableButton} onClick={this.handleSubmit}>Submit Answer</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    evalQuestions: state.evalQuestions
  }
}

export default connect(mapStateToProps)(EvalMe)
