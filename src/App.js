import React, {
  Component
} from 'react';

class App extends Component {
  render() {
    const greeting = "Heeeey"
    const dom = <input type="text"
      onChange={
        () => {
          console.log(this)
        }
      }
    />
    const ddm = <div>
      <label htmlFor="bar" > bar </label>
      <input type="text"
          onChange={
            () => {
              console.log(this)
            }
          }
      />
    </div>
      //<h1 className="foo">{greeting}</h1>
      return ddm
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
