import React,{useState} from "react";
import User from "./User";
import Name from "./Name";

function App(props) {

  const[count , Setcount]= useState(10);
  const[data ,Setdata]=useState(100);
  const[name ,SetName]= useState("Pallavi")

 
  return (
    <div className="App">
      <h2>UseEffect in Props</h2>
      <User count={count}  Data={data} /> 
      <Name Name={name}/>
      <button onClick={() => Setcount(count+2)}> Count Update</button>
      <button onClick={() => Setdata(data +10)}> Data Update</button>
      <button onClick={() => SetName("Pk")}>Name Update</button>
    </div>
  );
}

export default App;
