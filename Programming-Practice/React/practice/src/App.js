import React ,{useState} from 'react';
import './App.css';

function App() {
  const [data, setdata] =useState({
    name :''
  });

  const submitHandler = () =>{
    console.log("hii",data.split(','));
  }

  const handleChange = (e) =>{
    setdata(e.target.value);
  }

  return (
    <>
        <h1>Palalvi</h1>
        <label>Name</label>
        <input name="name" onChange={handleChange}/>
        <button onClick={submitHandler}>Submit</button>
        <div>
          {data}
        </div>
    </>
  );
}

export default App;
