import React, { Component } from 'react';

/*
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
    const ddmr = <React.Fragment>
      <label htmlFor="bar" > bar </label>
      <input type="text"
        onChange={
          () => {
            console.log(this)
          }
        }
      />
      </React.Fragment>
      //<h1 className="foo">{greeting}</h1>
      return ddmr
    }
  }
*/
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
// 関数コンポーネント
const App = () => {
  const profiles = [
    { name: "JIro", age: 10 },
    { name: "hanako", age: 12 },
    { name: "tomoko" },
  ];
  return (
    <div>
      {
        profiles.map((p,index) => {
          return <User name={p.name} age={p.age} key={index}/>
        })
      }
    </div>
  );
}

const User = (props) => {
  return <div > Hi, i 'm {props.name}! and {props.age} yeas old!</div>
}
User.defaultProps = {
  age: 1
}

export default App;
