import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'


const NewExpense = () => {

    const SaveExpenseDataHandler = () =>{
        const expenseData = {

            ...expenseData,
            id:Math.random().toString()
        };
        console.log(expenseData);
    }
  return (
    <div className='new-expense'> 
      <ExpenseForm  onSaveExpenseDate={SaveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense
