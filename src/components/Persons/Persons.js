import React, { PureComponent } from 'react';
import Person from './Person/Person'

class Persons extends PureComponent{
  // static getDerivedStateFromProps(props, state){
  //   console.log('[Person.js] getDerivedStateFromProps');
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState)
  // {
  //   console.log('[Person.js] shouldComponentUpdate');
  //   if (nextProps.persons !== this.props.persons ||
  //       nextProps.changed !== this.props.changed ||
  //       nextProps.clicked !== this.props.clicked ) 
  //   {
  //     return true;  
  //   }
  //   else
  //   {
  //     return false;
  //   }
    
  // }

  getSnapshotBeforeUpdate(prevProps, prevState)
  {
    console.log('[Person.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot)
  {
    console.log('[Person.js] componentDidUpdate');
    console.log(snapshot);
    
  }

  componentWillUnmount()
  {
    console.log('[Person.js] componentWillUnmount');
  }
  render()
  {
    console.log('[Persons.js] rendering...s');
  
    return this.props.persons.map((person, index) => {
          return (<Person
            click={() => this.props.clicked(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.props.changed(event, person.id)} 
            isAuth = {this.props.isAuthenticated}
            /> );
        } );
      };
  }
  
export default Persons;