import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


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

nameChangedHandler = (event) => {
  this.setState({
    persons: [
      { name: 'Max', age: 28 },
      { name: event.target.value, age: 29 },
      { name: 'Stephanie', age: 26 },
     ]
  });
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

      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

      let persons = null;
      if(this.state.showPersons) {
          persons = (
            <div>
                {this.state.persons.map((person, index) => {
                  return <Person
                   click ={() => this.deletePersonHandler(index)} 
                   name={person.name}
                   age={person.age}
                   key={person.id} />
                })}
            </div>
        );
      }

     return (
      <div className="App">
        <h1>Hi, I'm a React App</h1> 
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Person</button>
        {persons}        
      </div>
    );
    //return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Does this one work now?'));
    }
  }


  export default App;

