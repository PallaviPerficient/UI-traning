import React,{useState} from 'react'
function App() {
  const [flag , setflag] =useState(false)

  function Boolean(){
    console.log("Click me!!");
    return setflag(!flag)
  }
  return (
    <div className="App">
      <div>{flag}</div>
      <button onClick={Boolean}>Click</button>
    </div>
  );
}

export default App;
