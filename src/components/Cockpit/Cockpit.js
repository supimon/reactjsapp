/**
 * Created by supimon on 26/01/18.
 */
import React from 'react';
import classes from './Cockpit.css';

const Cockpit = props => {

  const genClasses = [];
  let btnClasses = null;
  if(props.show){
    btnClasses = classes.Red;
  }
  if(props.persons.length <=2){
    genClasses.push( classes.red );
  }
  if(props.persons.length <=1){
    genClasses.push( classes.bold );
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, this is my 2nd react commit</h1>
      <p className={genClasses.join(' ')}>this really works!</p>
      <button
        className={btnClasses}
        onClick={props.toggled}>Show persons</button>
    </div>
  );
}

export default Cockpit;