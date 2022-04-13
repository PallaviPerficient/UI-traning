import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card';

const ExpenseItem = (props) => {

  const [title , setTitle] = useState(props.title);
  console.log("Evaluated");

  const submitHandler = () =>{
    setTitle("updated!!")
    console.log("Clicked");
  }

       
    return (
      <Card className='expense-item'>
       <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
          <button onClick={submitHandler}>Change Title</button>
        </div>
      </Card>
    );
  }

export default ExpenseItem
