/**
 * Created by supimon on 26/01/18.
 */
import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  // just to check if setState would fire in life cycle hooks
  state = {
    persons: []
  };

  constructor(props){
    super(props);
    console.log('[Persons.js] inside constructor', props);
  }

  componentWillMount(){
    console.log('[Persons.js] inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[Persons.js] inside componentDidMount()');
  }

  componentWillReceiveProps(nextProps){
    console.log('[UPDATE Persons.js] inside componentWillReceiveProps()', nextProps);
    // this is right
    /*this.setState({
      persons: nextProps.persons
    });*/
  }

  /*shouldComponentUpdate(nextProps, nextState){
    console.log('[UPDATE Persons.js] inside shouldComponentUpdate()', nextProps, nextState);
    return nextProps.persons !== this.props.persons ||
      nextProps.deleted !== this.props.deleted ||
      nextProps.changed !== this.props.changed ; // note: only the pointers are compared
  }*/

  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE Persons.js] inside componentWillUpdate()', nextProps, nextState);
    // this is wrong because it will cause re-render
    // however this will be batched together with the one in componentDidUpdate
    // since they are all executed in the same context
    /*this.setState({
      persons: this.props.persons
    });*/
  }

  componentDidUpdate(){
    console.log('[UPDATE Persons.js] inside componentDidUpdate()');
    // this is wrong because it will cause re-render
    this.setState({
      persons: this.props.persons
    });
  }

  render(){

    console.log('[Persons.js] inside render()');

    return this.props.persons.map((person, index) => {
      return (
        <Person
          position={index}
          name={person.name}
          age={person.age}
          delete={this.props.deleted.bind(this, index)}
          change={(event) => this.props.changed(event, person.id)}
          key={person.id}
        />
      )
    })
  }
}

export default Persons;