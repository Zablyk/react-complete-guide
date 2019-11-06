import React from 'react';

const person = (props) => {
    return(
        <div>
            <p onClick={props.click}>I'm {props.name} and I'm a {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
        </div>
    );
};

export default person;