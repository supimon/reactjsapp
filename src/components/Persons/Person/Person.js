import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component{
  render(){
    return (
      <div className={classes.Person}>
        <p onClick={this.props.delete}>Hi I'm {this.props.name} and I am {this.props.age} yrs old.</p>
        <p>{this.props.children}</p>
        <input onChange={this.props.change} value={this.props.name}/>
      </div>
    );
  }
}

export default Person;