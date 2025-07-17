import React, { Component } from 'react'

export default class GreetingsProps extends Component {
  render() {
    return (
      <div>
        <h1>hi {this.props.username} and message is{this.props.msg}</h1>
      </div>
    )
  }
}
