/**
 * Created by supimon on 26/01/18.
 */
import React, { Fragment } from 'react';
import classes from './Cockpit.css';
/*import Aux from '../../hoc/Aux';*/

const Cockpit = props => {

  const genClasses = [];
  let btnClasses = classes.Button;
  if(props.show){
    btnClasses = [ classes.Button, classes.Red ].join(' ');
  }
  if(props.persons.length <=2){
    genClasses.push( classes.red );
  }
  if(props.persons.length <=1){
    genClasses.push( classes.bold );
  }

  return (
    <Fragment>
      <h1>{props.appTitle}</h1>
      <p className={genClasses.join(' ')}>this really works!</p>
      <button
        className={btnClasses}
        onClick={props.toggled}>Show persons</button>
    </Fragment>
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