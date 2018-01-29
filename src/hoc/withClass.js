/**
 * Created by supimon on 29/01/18.
 */
import React from 'react';

const withClass = (props) => {
  return (
    <div className={props.classes}>
      {props.children}
    </div>
  );
}

export default withClass;