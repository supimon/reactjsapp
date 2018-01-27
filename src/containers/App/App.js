import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../../components/Persons/Persons';
import Cockpit from '../../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] inside constructor', props);
    this.state = {
      persons : [
        {id: "unique1", name: "Supi", age: 36 },
        {id: "unique2", name: "Dimple", age: 36 },
        {id: "unique3", name: "Aura", age: 3 }
      ],
      show: true
    }
  }

  componentWillMount(){
    console.log('[App.js] inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[App.js] inside componentDidMount()');
  }

  componentWillReceiveProps(nextProps){
    console.log('[UPDATE App.js] inside componentWillReceiveProps()', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] inside shouldComponentUpdate()', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE App.js] inside componentDidUpdate()');
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
    console.log('[App.js] inside render()');

    let persons = null;

    if(this.state.show){
      persons = (
        <Persons
          changed={this.changeHandler}
          deleted={this.deleteHandler}
          persons={this.state.persons}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.appTitle}
          show={this.state.show}
          toggled={this.toggleHandler}
          persons={this.state.persons}
        />
        {persons}
      </div>
    );

      // this is same as below
      // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi, this is
      // my second commit'))
  }
}

export default App;
