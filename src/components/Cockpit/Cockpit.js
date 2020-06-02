import React, { useEffect } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    
  // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      console.log("[Cockpit.js] useEffect");
      //http request...
      setTimeout(() => {
        alert("save data to the cloud.");
        console.log("is it working?");
      }, 1000);
      return () => {
        console.log("[Cockpit.js] cleanup work in useEffect");
      };
    }, []);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      console.log("[Cockpit.js] 2nd useEffect");
      return () => {
        console.log("[Cockpit.js] cleanup work in useEffect");
      };
    });


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
            <h1>{props.title}</h1>
            <p className = {unclasses.join( '' )}>This is really working!</p>
            <button
            onClick={props.clicked}>Toggle Persons</button>
            <AuthContext.Consumer>
              {context => <button onClick = {context.login}>Log In</button>}    
            </AuthContext.Consumer>
        </div>
    );
};

export default React.memo(cockpit);