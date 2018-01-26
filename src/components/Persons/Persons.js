/**
 * Created by supimon on 26/01/18.
 */
import React from 'react';
import Person from './Person/Person';

const Persons = props => props.persons.map((person, index) => {
  return (
    <Person
      name={person.name}
      age={person.age}
      delete={props.deleted.bind(this, index)}
      change={(event) => props.changed(event, person.id)}
      key={person.id}
    />
  )
});

export default Persons;