import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state  = {
    persons: [
     { name: 'Oleg', age: 39 },
     { name: 'Manu', age: 29 },
     { name: 'Stephanie', age: 24 },
    ],
    otherState: 'some other value'
   };

  

   
 switchNameHandler = (newName) => {
  //console.log('Was clicked!');
  //DON'T DO THIS: personsState.persons[0].name = 'Maximilian';
  this.setState({
    persons: [
      { name: newName, age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 27 },
     ]
  });
};
    render () {
     return (
      <div className="App">
        <h1>Hi, I'm a React App</h1> 
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch name</button>
        <Person
          name= {this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Maxim')}>My hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Does this one work now?'));
    }
  }


  export default App;
