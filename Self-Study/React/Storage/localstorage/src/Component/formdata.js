import React, { useState } from 'react';

function Formdata(){
    const [name ,SetName] =useState("");
    const [email,Setemail] = useState("");
    const [number, Setnumber] = useState( )

   const Onsubmit=()=>{
        localStorage.setItem("name" ,name)
        localStorage.setItem("email", email)
        localStorage.setItem("Number" , number)
    }

return(
        <>
            <form>
            <label>
                Name:
                <input type="text" name="name" onChange={(e)=>SetName(e.target.value)}/>
            </label>
            <br></br>
            <label>
                Email:
                <input type="email" name="email" onChange={(e)=>Setemail(e.target.value)}/>
            </label>
            <br></br>
            <label>
                Number:
                <input type="number" name="number"  onChange={(e)=>Setnumber(e.target.value)}/>
            </label>
            <br></br>
            <input type="submit" value="Submit" onClick={Onsubmit} />
            </form>
            <div>
                <div>{localStorage.getItem("name")}</div>
                <div>{localStorage.getItem("email")}</div>
                <div>{localStorage.getItem("Number")}</div>
            </div>
        </>
        
    )
}

export default Formdata;