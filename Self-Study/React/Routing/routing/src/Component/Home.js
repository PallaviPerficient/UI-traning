import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import About from "./About";




const Home = (props) => {
    const [name , Setname]= useState('')
    const [lastname ,Setlastname] = useState (' ')

  
    const navigate = useNavigate();

    const Submit = () => {
        // alert(`Submitting Name ${name} ${lastname}`);
        navigate('/about');
        console.log(1);
    }
return (
    <div>
        <form>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => Setname(e.target.value)}></input>

            <label>Last name:</label>
            <input type="text" value={lastname} onChange={(e) => Setlastname(e.target.value)}></input>

            <button type="Submit" onClick={() => Submit()}>Submit</button>
        </form>
        <div>{name}</div>
        <div>{lastname}</div>
    </div>
  );
}

export default Home;
