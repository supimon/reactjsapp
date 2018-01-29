/**
 * Created by supimon on 29/01/18.
 */
import React from 'react';

const withClassHOC = (WrappedComponent, classesName) => {
  return (props) => {
    return (
      <div className={classesName}>
        <WrappedComponent />
      </div>
    );
  }
}

export default withClassHOC;

