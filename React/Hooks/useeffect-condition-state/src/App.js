import './App.css';
import React,{useState,useEffect} from 'react'

function App() {
  const [data ,Setdata] =useState(10);
  const [count ,SetCount] =useState(100);

  useEffect(()=>{
    console.warn("Called with Data State")
  },[data]) //// this useEffect only work when data state will called


  useEffect(()=>{
    alert("count is " + count)
  },[count]) /// We can in specific state


  return (
    <div className="App">
        <h1>useEffect Condition</h1>
        <h2>Count : {count}</h2>
        <h2>Data : {data}</h2>

        <button onClick={() => SetCount(count+1)}>Update Count</button>
        <button onClick={() => Setdata(data+1)}>Update Data </button>

    </div>
  );
}

export default App;
