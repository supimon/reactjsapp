import React from 'react';
import './Person.css';

const person = (props) => {

    return (
    <div className="Person">
        <p onClick={props.delete}>Hi I'm {props.name} and I am {props.age} yrs old.</p>
        <p>{props.children}</p>
        <input onChange={props.change} value={props.name}/>
    </div>
    );
};

export default person;