import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  // Managing Error Modal
  const [error , setError] = useState();


  const addUserHandler = (event) => {
    event.preventDefault();
    // Condition to Check Input Empty Input Value
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      // Condition for error message
      setError({
        title:"Invalid Input",
        message:"Please enter a valid  name and age(non-empty values)"
      });
      return
    }
    if (+enteredAge < 1) {
      // + because it a string in usestate

      setError({
        title:"Invalid Age",
        message:"Please enter a valid age(>0)"
      });
      return;
    }
    // update data in list using APp Componenet
    props.adduser(enteredUsername ,enteredAge)
    setEnteredUsername('');
    setEnteredAge('');
    // setError('')
  };
  const errorHandler =() =>{
    setError(null)
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <>
    {error && <ErrorModal  title={error.title} message ={error.message} error={errorHandler}/>}
      <Card className={classes.input}>
        <form>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={usernameChangeHandler}  value={enteredUsername}/>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge}/>
          <Button type="submit" onClick={addUserHandler}>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;