import React from 'react'
import {Link} from 'react-router-dom'

class EditableLinkComponent extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        {/* <button type='button' onClick={() => this.props.editable()}>Edit</button> */}
        {this.props.isEditable
          ? <div>
            <textarea name={this.props.type} onChange={this.props.handleChange} placeholder={this.props.content}/>
            <button onClick={() => this.props.addGradProfile()}>Save Changes
            </button>
          </div>
          : this.props.img
            ? <a href={`${this.props.content}`} target='_blank'><img src={this.props.img} /></a>
            : <a href={`${this.props.content}`} target='_blank'>{this.props.content}</a>
        }
      </div>
    )
  }
}

export default EditableLinkComponent
