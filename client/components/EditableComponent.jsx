import React from 'react'

const EditableComponent = (props) => {
  return (
    <div>
      <button>Edit</button>
      <h1>{props.content}</h1>
    </div>
  )
}

export default EditableComponent
