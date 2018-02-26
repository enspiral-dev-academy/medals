import React from 'react'
import {Link} from 'react-router-dom'

class EditableComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editable: false
    }
    this.changeEditable = this.changeEditable.bind(this)
  }

  changeEditable () {
    this.setState({editable: !this.state.editable})
  }

  render () {
    return (
      <div>
        <button type='button' onClick={() => this.changeEditable()}>Edit</button>
        {this.state.editable
          ? <div>
            <textarea name={this.props.type} onChange={this.props.handleChange} placeholder={this.props.content}/>
            <Link to='/grad-profile'><button onClick={() => this.props.addGradProfile()}>Save Changes
            </button></Link>
          </div>
          : <h1>{this.props.content}</h1>
        }
      </div>
    )
  }
}

export default EditableComponent
