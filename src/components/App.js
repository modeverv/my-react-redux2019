import React, { Component } from 'react';
// import { getPortPromise } from 'portfinder';
import { connect } from 'react-redux';
import { decrement, increment } from '../actions';

class App extends Component {
  render() {
    // eslint-disable-next-line prefer-destructuring
    const props = this.props;
    return (
      <React.Fragment>
        <div>counter: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

// @ts-ignore
const mapStateToProps = state => ({ value: state.count.value });
/*
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})
*/
const mapDispatchToProps = { increment, decrement };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
