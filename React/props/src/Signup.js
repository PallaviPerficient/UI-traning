import React, { useState } from "react";
import Login from "./Login";


function Signup(props){ 
    const[data,Setdata] =useState('')

    const Submithandler = (e) =>{
        console.log(data);
        e.preventDefault();
        Login(data)

    }
    return (
        <form>
            <label>
                Name:
            </label>
            <input type="text" value={data} onChange={(e) => Setdata(e.target.value)}></input>
        
            <button type="Submit" onClick={Submithandler}>Submit</button>
        </form>
    )
}
export default Signup;