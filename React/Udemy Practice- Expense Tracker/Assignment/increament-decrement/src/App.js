import React,{useState} from 'react';
import './App.css';

const App = () => {
  const [counter , setCounter] = useState(0);

  const onClickIncreament = () =>{
    setCounter(precount => precount+1)
  }
  const onClickDecrement = () =>{
    setCounter(precount => precount-1)
  }
  return (
    <>
      <p>{counter}</p>
      <button onClick={onClickIncreament}>Increament</button>
      <button onClick={onClickDecrement}>Decreament</button>
    </>
  );
}

export default App;
