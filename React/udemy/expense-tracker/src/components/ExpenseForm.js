import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {

    const [title ,setTitle] = useState('');
    const [amount ,setamount] = useState( ' ');
    const [date ,setdate] = useState ( ' ');

    const titlChangeHandler = (e) =>{
        setTitle(e.target.value); 
    }

    const AmountChangeHandler = (e) =>{
        setamount(e.target.value);
    }

    const DateChangeHandler = (e) =>{
        setdate(e.target.value)
    }

    const SubmitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            enteredtitle: title,
            enteredamount: amount,
            entereddate: new Date(date)

        }
        props.onSaveExpenseDate()
        setTitle(' ');
        setamount('');
        setdate(' ');

        console.log(expenseData);
    }
  return ( 
    <form onSubmit={SubmitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={title}  onChange={titlChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={amount} onChange={AmountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={date} onChange={DateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='Submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm
