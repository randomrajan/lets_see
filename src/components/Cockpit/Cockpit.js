import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    const unclasses = [];
    // eslint-disable-next-line no-unused-vars
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    
    if(props.persons.length <= 2)
    {
      unclasses.push('red');
    }
    if(props.persons.length <= 1)
    {
      unclasses.push('bold');
    }

    return(
        <div className = "Cockpit">
            <h1>Hi, I'm a React App</h1>
            <p className = {unclasses.join( '' )}>This is really working!</p>
            <button
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;