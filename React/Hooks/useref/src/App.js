
import React, { useRef } from 'react';


const App = () => {
  let inputref = useRef();

  const handle = () =>{
    // console.warn("hiii");
    inputref.current.style.color="red";
    inputref.current.focus();
    inputref.current.value="100";
    inputref.current.style.display="none";

  } 
  return (
    <div className="App">
      <h2>useref</h2>
     <input type="text"  ref={inputref}/>
     <button onClick={() => handle()}>Handle</button>
    </div>
  );
}

export default App;

