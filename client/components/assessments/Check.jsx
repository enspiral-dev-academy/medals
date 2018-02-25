import React from 'react'

class Check extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    this.state.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
  
  }

  render () {
    return (
      <div>
        <h3>{this.props.feedback.check}</h3>
        <p>{this.props.feedback.reason}</p>
        <button onClick={this.handleClick} type='button'>Next Question</button>
      </div>
    )
  }
}

export default Check
