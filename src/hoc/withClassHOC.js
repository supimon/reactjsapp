/**
 * Created by supimon on 29/01/18.
 */
import React, { Component } from 'react';

const withClassHOC = (WrappedComponent, classesName) => {
  /*return (props) => {
    return (
      <div className={classesName}>
        <WrappedComponent {...props} />
      </div>
    );
  }*/

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

