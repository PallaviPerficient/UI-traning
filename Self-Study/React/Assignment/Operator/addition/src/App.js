import React, { useState } from "react";
import Input from "./Input";


const App = () => {
  const [count, setCount] = useState();
  const [count2, setCount2] = useState();

  return (
    <div className="App">
      <h2>Add Numbers</h2>
      <label>First Number :</label>
      <input onChange={(e)=> setCount(e.target.value)}  value={count} type="number"/>
      <br></br>
      <label>Second  Number :</label>
      <input onChange={(e)=> setCount2(e.target.value)} value={count2} type="number"/>

      <Input values={count} values2={count2} />
    </div>
  );
};

export default App;
