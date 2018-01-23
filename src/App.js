import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
      persons : [
          {name: "Supi", age: 36},
          {name: "Dimple", age: 36},
          {name: "Aura", age: 3}
      ]
  }

  switchNameHandler = (newName) => {
      //console.log('clicked');
      this.setState(
          {persons: [
              {name: newName, age: 36},
              {name: "Dimple Gusain", age: 36},
              {name: "Aura Supi", age: 3}
          ]}
      );
  }

  nameChangeHandler = (event) => {
      this.setState(
          {persons: [
              {name: "Supi", age: 36},
              {name: "Dimple Gusain", age: 36},
              {name: event.target.value, age: 3}
          ]}
      );
  }

  render() {

    const style = {
        backgroundColor: 'white',
        borderRadius: '3px',
        border: '1px solid blue',
        padding: '10px',
        cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, this is my 2nd react commit</h1>
        <button
            style={style}
            onClick={() => this.switchNameHandler("Supi")}
        >Switch Names</button>
        <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, "Supimon")}
        />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            change={this.nameChangeHandler}
        />
      </div>
    );

      // this is same as below
      // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi, this is
      // my second commit'))
  }
}

export default App;
