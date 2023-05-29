import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

  const [enteredtitle , setEnteredTitle] = useState('');
  const [enteredamount , setEnteredAmount] = useState('');
  const [entereddate , setEnteredDate] = useState('');

  const onTitleChangeHandler = () =>{
    setEnteredTitle("hello")
    console.log("Title Update!!")
  }
  const onAmountChangeHandler = () =>{
    setEnteredAmount("13")
    console.log("Amount  Update!!")
  }
  const onDateChangeHandler = () =>{
    setEnteredDate("14-5-2023")
    console.log("Date Update!!")
  }

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={onTitleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={onAmountChangeHandler}  />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' onChange={onDateChangeHandler}  />
        </div>
        <button type='submit' className='addExpenseButton'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;