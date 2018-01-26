import React, { Component } from 'react';
import classes from './App.css';
import Person from '../../components/Persons/Person/Person';

class App extends Component {

  state = {
    persons : [
      {id: "unique1", name: "Supi", age: 36 },
      {id: "unique2", name: "Dimple", age: 36 },
      {id: "unique3", name: "Aura", age: 3 }
    ],
    show: true
  }

  toggleHandler = () => {
    this.setState(
      {show: !this.state.show}
    );
  }

  deleteHandler = (index) => {
    // const persons = this.state.persons.slice(); // always make a copy
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState(
      {persons: persons}
    );
  }

  changeHandler = (event, id) => {
    const persons = [...this.state.persons];
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {...persons[personIndex]};
    person.name = event.target.value;
    persons[personIndex] = person;

    this.setState(
      { persons: persons}
    );
  }

  render() {

    let persons = null,
        btnClasses = null;

    if(this.state.show){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                delete={this.deleteHandler.bind(this, index)}
                change={(event) => this.changeHandler(event, person.id)}
                key={person.id}
              />
            )
          })}
        </div>
      );

      btnClasses = classes.Red;
    }

    const genClasses = [];
    if(this.state.persons.length <=2){
      genClasses.push( classes.red );
    }
    if(this.state.persons.length <=1){
      genClasses.push( classes.bold );
    }

    return (
      <div className={classes.App}>
        <h1>Hi, this is my 2nd react commit</h1>
        <p className={genClasses.join(' ')}>this really works!</p>
        <button
          className={btnClasses}
          onClick={() => this.toggleHandler()}>Show persons</button>
        {persons}
      </div>
    );

      // this is same as below
      // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi, this is
      // my second commit'))
  }
}

export default App;
