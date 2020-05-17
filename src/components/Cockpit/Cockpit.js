import React from 'react';

const cockpit = (props) => {
    const unclasses = [];
    if(props.persons.length <= 2)
    {
      unclasses.push('red');
    }
    if(props.persons.length <= 1)
    {
      unclasses.push('bold');
    }

    return(
        <div>
            <h1>Hi, I'm a React App</h1>
            <p className = {assignedClasses}>This is really working!</p>
            <button
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;