import React from "react";
import Deposite from './Component/Deposite/Deposit'
import Substract_debit from "./Component/Substract_debit/Substract_debit";


function App(props) {
  return (
    <div >
     {/* <Deposite amountType="debit" />
    <Substract_debit amountType="credit"/> */}
{/* 
    <Form amountType="debit" />
    <Form amountType="credit"/> */}

    <Deposite />
    <Substract_debit />
    </div>
  );
}

export default App;
