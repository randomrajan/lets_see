import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    const unclasses = [];
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
        <div className = {classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className = {unclasses.join( '' )}>This is really working!</p>
            <button
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;