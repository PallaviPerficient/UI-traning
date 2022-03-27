import React from "react";
import Deposite from './Component/Deposite/Deposit'
import Substract_debit from "./Component/Substract_debit/Substract_debit";


function App(props) {
  return (
    <div >
     <h1>Perficient National Bank</h1>
     <Deposite />
    <Substract_debit />
    </div>
  );
}

export default App;
