import React, { Component } from 'react';
import {connect} from 'react-redux'

import {increment, decrement} from '../actions'

class App extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = { count: 0 };
  }
  handlePlusButton = () => {
    console.log("handlePlusButton");
    this.setState({ count: ++this.state.count });
  }

  handleMinusButton = () => {
    console.log("handleMinusButton");
    this.setState({ count: --this.state.count });
  }
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <div>counter: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    );
  }
}
export default App;
