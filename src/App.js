import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
      // const persons = this.state.persons.slice(); always make a copy
      const persons = [...this.state.persons];
      persons.splice(index, 1);
      this.setState(
          {persons: persons}
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

    let persons = null;

    if(this.state.show){
        persons = (
            <div>
                {this.state.persons.map((person, index) => {
                    return <Person
                        name={person.name}
                        age={person.age}
                        delete={this.deleteHandler.bind(this, index)}
                        key={person.id}
                    />
                })}
            </div>
        );
    }


    return (
      <div className="App">
        <h1>Hi, this is my 2nd react commit</h1>
        <button
            style={style}
            onClick={() => this.toggleHandler()}
        >Show persons</button>
        {persons}
      </div>
    );

      // this is same as below
      // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi, this is
      // my second commit'))
  }
}

export default App;
