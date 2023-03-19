import './App.css';
import React from 'react';
import axios from 'axios';

function App() {
  const Submithandler =(event)=>{
    event.preventDefault();
    const ID =event.target.ID.value;
    const Name = event.target.Name.value;
    const Address = event.target.Address.value;
    const data ={ ID,Name,Address}
    axios.post("https://jsonplaceholder.typicode.com/posts",data)
    .then((data) =>{
      console.log(data);
    })
    .catch((error)=>{
    console.log(error)
    });
  };

  return (
    <div className="App">
     <h1>Post method using Fetch</h1>
     <form>
        <label>
          ID:
          <input type="text" name="name" />
        </label>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Address:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" onSubmit={Submithandler} />
    </form>
    </div>
  );
}

export default App;
