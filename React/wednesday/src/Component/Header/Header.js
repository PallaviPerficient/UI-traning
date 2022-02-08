import React, {useState} from "react";


const Header=(props)=>{
        const [firstName, setfirstName] = useState("");
        const [lastName, setlastName] = useState("");
        const [fullname ,setfullname] =useState("");

        const submitForm = () => {
            setfullname(firstName +" " + lastName)
        }

    return(
        <div>
       
        <h3>Header Component</h3>
            <p>First name :</p>
            <input  placeholder="First Name" type="text" name="name"  onChange={event => setfirstName(event.target.value)}/>

            <p>Last name :</p>
            <input  placeholder="Last Name" type="text" name="name" onChange={event => setlastName(event.target.value)} />       
            
             <button className="submit" onClick={submitForm}> Submit</button>
            <div>{fullname}</div>

        </div>
    )
}

export default Header;