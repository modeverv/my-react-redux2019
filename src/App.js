import React, { Component } from 'react';

class App extends Component {
  render() {
    const greeting = "Heeeey"
    const dom = <h1 className="foo">{greeting}</h1>
    return dom
  }
}

/*
class App extends Component {
  render() {
    return React.createElement(
      "div",
      null,
      "Hello Wooooold"
    );
  } 
}
*/
export default App;
