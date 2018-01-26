import React from 'react';
import classes from './Person.css';

const Person = (props) => {

  const err = Math.random();

  if(err > 0.8){
    throw new Error('random error motherfucker!')
  }

  return (
    <div className={classes.Person}>
      <p onClick={props.delete}>Hi I'm {props.name} and I am {props.age} yrs old.</p>
      <p>{props.children}</p>
      <input onChange={props.change} value={props.name}/>
    </div>
  );
};

export default Person;