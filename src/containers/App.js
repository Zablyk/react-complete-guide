import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';


class App extends Component {
  state  = {
    persons: [
     { id: 'asfa1', name: 'Oleg', age: 39 },
     { id: 'bfsr2', name: 'Manu', age: 29 },
     { id: 'sdjj3', name: 'Stephanie', age: 24 },
    ],
    otherState: 'some other value',
    showPersons: false
   };

nameChangedHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id
  });

  const person = {
    ...this.state.persons[personIndex]
  };

  //const person = Object.assign({}, this.state.persons[personIndex]); //equel to const person

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState({ persons: persons});
};

deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); alternative for a this line is below
    const persons = [...this.state.persons];
    
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}
 
    render () {

      let persons = null;
      let btnClass = '';

      if(this.state.showPersons) {
          persons = (
            <div>
              <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler} />
            </div>
        );

        btnClass = classes.Red; 
      }
      let assignedClasses = [];
      if(this.state.persons.length <= 2) {
        assignedClasses.push(classes.red);//assignedClasses 'red'
      }
      if(this.state.persons.length <= 1){
        assignedClasses.push(classes.bold);//assignedClasses 'red' and 'bold'
      }
     
     return (
      <div className={classes.App}>
        {persons}        
      </div>
     );
    //return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Does this one work now?'));
    }
  }


  export default App;

