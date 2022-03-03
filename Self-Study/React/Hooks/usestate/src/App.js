import React ,{useState} from 'react';

function App() {
  const [Steps ,setSteps] =useState(0)

  function Increase(){
    return setSteps(Steps + 2);
  }
  function decrement(){
    return setSteps(Steps - 2);
  }
  return (
    <>
      <div>Counter :{Steps}</div>
      <button onClick={Increase}>Increase Counter</button>
      <br></br>
      <button onClick={decrement}>Decrease Counter</button>
    </>

  );
}

export default App;
