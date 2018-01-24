import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {

    const styles = {
        '@media (min-width: 700px)': {
            width: '60%'
        }
    }

    return (
    <div className="Person" style={styles}>
        <p onClick={props.delete}>Hi I'm {props.name} and I am {props.age} yrs old.</p>
        <p>{props.children}</p>
        <input onChange={props.change} value={props.name}/>
    </div>
    );
};

export default Radium(person);