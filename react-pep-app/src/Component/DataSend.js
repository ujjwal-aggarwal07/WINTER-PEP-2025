import React from 'react'

export default function DataSend(props) {
    let { name, age } = props.name;
    return (
        <div> <h1>my name is { name} </h1>
          <h1> age: {age}</h1>
      </div>
  )
}
