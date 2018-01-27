/**
 * Created by supimon on 26/01/18.
 */
import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  render(){
    return this.props.persons.map((person, index) => {
      return (
        <Person
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