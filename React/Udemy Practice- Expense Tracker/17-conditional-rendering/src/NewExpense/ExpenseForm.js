import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //we have to update only one value then we have to use these method.
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // When need to update previous state data. It is Alternative...
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  //////////////////form Submission///////////////////////////////////
  const onSubmitHandler = (event) => {
    //default js
    event.preventDefault();
    const expenseData = {
      title:enteredTitle,
      amount :enteredAmount,
      date:new Date(enteredDate),
    };
    console.log("expenseDate",expenseData);
    props.onSaveExpenseData(expenseData);

    /////////////// After Form Submit Clear the Input Field ////////////////////////
    ////////////// pass the update state inside the input field  ex: value={enteredDate} ,value={enteredTitle}////////////////////
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler}  value={enteredTitle}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
        <button type='submit' className='addExpenseButton'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;