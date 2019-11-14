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
      if(this.state.showPersons) {
          persons = (
            <div>
                {this.state.persons.map((person, index) => {
                  return <Person
                   click ={() => this.deletePersonHandler(index)} 
                   name={person.name}
                   age={person.age}
                   key={person.id}
                   changed={(event) => this.nameChangedHandler(event, person.id)} />
                })}
            </div>
        );
            // style.backgroundColor = 'red';
            // style[':hover'] = {
            //   backgroundColor: 'salmon',
            //   color: 'black'
            // }    
      }

      let classes = [];
      if(this.state.persons.length <= 2) {
        classes.push('red');//classes 'red'
      }
      if(this.state.persons.length <= 1){
        classes.push('bold');//classes 'red' and 'bold'
      }
     
     return (
      <div className="App">
        <h1>Hi, I'm a React App</h1> 
        <p className={classes.join(' ')}>This is really working!</p>
        <button className="Botton"       
          onClick={this.togglePersonsHandler}>Toggle Person</button>
        {persons}        
      </div>
     );
    //return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Does this one work now?'));
    }
  }


  export default App;

