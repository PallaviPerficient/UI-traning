import React ,{useState} from 'react'
import Input from './Input';

function App(props) {
  const [count ,Setcount]=useState()
  const [count2,Setcount2]=useState()
  return (
    <div>
      <label>First Number :</label>
      <input onChange={(e) => Setcount(e.target.value)} value={count} type="number" ></input>
      <br></br>
      <label>Second Number :</label>
      <input onChange={(e) => Setcount2(e.target.value)} value={count2} type="number"></input>
      <Input  value1={count} values2={count2}/>
    </div>
  );
}

export default App;
