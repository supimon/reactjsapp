/**
 * Created by supimon on 29/01/18.
 */
import React, { Component } from 'react';

const withClassHOC = (WrappedComponent, classesName) => {

  // dumb component factory
  /*return (props) => {
    return (
      <div className={classesName}>
        <WrappedComponent {...props} />
      </div>
    );
  }*/

  // class component factory
  return class extends Component{
    render(){
      return (
        <div className={classesName}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }
}

export default withClassHOC;

