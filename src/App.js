import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, this is my 2nd react commit</h1>
        <Person />
      </div>
    );

      // this is same as below
      // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi, this is
      // my second commit'))
  }
}

export default App;
