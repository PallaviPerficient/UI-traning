import './App.css';
import Student from './Student';
import React,{useState} from 'react'
import Signup from './Signup';

function App(props) {
   const [name , Setname] =useState("VM")
  return (
    <div className="App">
      <h1> Props </h1>
      <Student  name={name} email={"abc@gmail.com"} other={{address:"Nagpur" ,number:"00000000000"}} />
      <button onClick={() => Setname("Pallavi")}>Update</button>
      <Signup name={"abc"}/>
    </div>
  );
}

export default App;
