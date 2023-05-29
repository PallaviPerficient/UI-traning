import React , {useState} from 'react';
import ExpenseDate from './Expensedate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  console.log("props",props);
  const [title , SetTitle] = useState(props.title);

  const clickHandler = () =>{
    SetTitle("Updated");
  }
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;