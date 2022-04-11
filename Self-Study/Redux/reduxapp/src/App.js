import React from 'react';
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Redux </h1>
      <div>
        <a title='Decreament'><span> - </span></a>
        <input type='text' name='quantity' value='0'></input>
        <a title='Increament'><span> + </span></a>

      </div>
    </div>
  )
}

export default App
