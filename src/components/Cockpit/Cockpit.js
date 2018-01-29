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
      <h1>{props.appTitle}</h1>
      <p className={genClasses.join(' ')}>this really works!</p>
      <button
        className={btnClasses}
        onClick={props.toggled}>Show persons</button>
    </div>
  );

  // you can return this array instead of wrapping it with a div but the styles would be lost
  /*return [
      <h1 key="uniqueKey123">{props.appTitle}</h1>,
      <p key="uniqueKey124" className={genClasses.join(' ')}>this really works!</p>,
      <button key="uniqueKey125"
        className={btnClasses}
        onClick={props.toggled}>Show persons</button>
  ];*/
}

export default Cockpit;