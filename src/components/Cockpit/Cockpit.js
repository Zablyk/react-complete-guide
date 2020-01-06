import React, { useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = props => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      //HTTP request...
      //const timer = setTimeout(() => {
      //  alert('Saved data to cloud!');
      //}, 1000)
      toggleBtnRef.current.click();
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
     
      if(props.personsLenght <= 2) {
        assignedClasses.push(classes.red);//assignedClasses 'red'
      }
      if(props.personsLenght <= 1){
        assignedClasses.push(classes.bold);//assignedClasses 'red' and 'bold'
      }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1> 
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
              ref={toggleBtnRef}
              className={btnClass}
              onClick={props.clicked}>Toggle Person
            </button>
            <button onClick={authContext.login}>Log in</button>}
        </div>
    );
};

export default React.memo(cockpit);