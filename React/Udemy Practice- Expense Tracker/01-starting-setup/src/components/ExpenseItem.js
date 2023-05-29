import React from "react";
import "./expenseitem.css";

const ExpenseItem = (props) => {
    console.log("Expense Props",props.expensedata[0].title);

  const expenseDate = new Date(2021, 2, 20);
 const expenseamount = 236;

  return (
    <>
      <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
          <h2>{props.expensedata[0].title}</h2>
          <div className="expense-item__price">{expenseamount}</div>
        </div>
      </div>
    </>
  );
};

export default ExpenseItem;
