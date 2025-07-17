import React from 'react'

const GreetingsPropsFunction = () => {
  return (
    <div>
      <h1> Hi {props.username} and my message is {props.msg} </h1>
    </div>
  )
}

export default GreetingsPropsFunction
