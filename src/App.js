import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = {count: 0}
  }
  render() {
    console.log(this.state)
    return (<div>counter: {this.state.count}</div>)
  }
}
export default App;
