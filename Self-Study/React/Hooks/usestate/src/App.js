import React ,{useState} from 'react';

function App() {
  const [Steps ,setSteps] =useState(0)

  const Increase = () =>{
    return setSteps(Steps +1);
  }
  const decrement =() =>{
    return setSteps(Steps -1);
  }
  return (
    <>
      <div>Counter :{Steps}</div>
      <button onClick={() => Increase () }>Increase Counter</button>
      <br></br>
      <button onClick={() =>decrement() }>Decrease Counter</button>
    </>

  );
}

export default App;
