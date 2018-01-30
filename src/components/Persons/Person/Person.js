import React, { Component } from 'react';
import classes from './Person.css';
import withClassHOC from '../../../hoc/withClassHOC';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';

class Person extends Component{

  constructor(props){
    super(props);
    console.log('[Person.js] inside constructor', props);
  }

  componentWillMount(){
    console.log('[Person.js] inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[Person.js] inside componentDidMount()');
    this.inputElement.focus();
  }

  render(){

    console.log('[Person.js] inside render()');
    return (
      <Aux>
        <p onClick={this.props.delete}>Hi I'm {this.props.name} and I am {this.props.age} yrs old.</p>
        <p>{this.props.children}</p>
        <input
          ref={(inp) => { this.inputElement = inp}}
          onChange={this.props.change}
          value={this.props.name}/>
      </Aux>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  delete: PropTypes.func,
  change: PropTypes.func
}

export default withClassHOC(Person, classes.Person);