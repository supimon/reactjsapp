/**
 * Created by supimon on 26/01/18.
 */
import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

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
  }

  /*shouldComponentUpdate(nextProps, nextState){
    console.log('[UPDATE Persons.js] inside shouldComponentUpdate()', nextProps, nextState);
    return nextProps.persons !== this.props.persons ||
      nextProps.deleted !== this.props.deleted ||
      nextProps.changed !== this.props.changed ; // note: only the pointers are compared
  }*/

  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE Persons.js] inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE Persons.js] inside componentDidUpdate()');
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