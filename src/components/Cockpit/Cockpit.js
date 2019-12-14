import React, { useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      //HTTP request...
      setTimeout(() => {
        alert('Saved data to cloud!');
      }, 1000)
      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect')
      };
      
    }, []);

    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] cleanup work in 2nd useEffect')
      };
    });
    
    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
   }
     
      if(props.persons.length <= 2) {
        assignedClasses.push(classes.red);//assignedClasses 'red'
      }
      if(props.persons.length <= 1){
        assignedClasses.push(classes.bold);//assignedClasses 'red' and 'bold'
      }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1> 
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
              className={btnClass}
              onClick={props.clicked}>Toggle Person</button>
        </div>
    );
};

export default cockpit;