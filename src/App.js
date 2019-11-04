import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
     return (
      <div className="App">
        <h1>Hi, I'm a React App</h1> 
        <p>This is really working!</p>
        <Person name="Max" age="29"/>
        <Person name="Oleg" age="33">My hobbies: Racing</Person>
        <Person name="Stephanie" age="24"/>
      </div>
    );
    //return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Does this one work now?'));
  }
}

export default App;
