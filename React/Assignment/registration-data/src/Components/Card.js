import React, {useState} from 'react';
import './Card.css'

const Card = (props) => {
    console.log("Card Props" ,props);
    const [fname , setFname] = useState();
    const [lname , setLname] = useState();
    const [address , setAddress] = useState();
    const [dob , setDob] = useState();
    const [education , setEducation] = useState();
    const [mob , setMob] = useState();

    const submitHandler = (event) =>{
        event.preventDefault();
        props.adduser(fname , lname,address ,dob, education ,mob)
        if(fname?.trim()?.length === 0 || lname?.trim()?.length === 0 || mob?.trim()?.length === 0){
            return
        }
        setFname('');
        setLname('');
        setAddress('');
        setDob('');
        setEducation('');
        setMob('');
    }
    
    const firstNameHandler = (event) =>{
        setFname(event.target.value);
    }
    
    const lastNameHandler = (event) =>{
        setLname(event.target.value);
    }

    const addressHandler = (event) =>{
        setAddress(event.target.value);
    }

    const dobHandler = (event) =>{
        setDob(event.target.value);
    }
    const educationHandler = (event) =>{
        setEducation(event.target.value);
    }
    const mobHandler = (event) =>{
        setMob(event.target.value);
    }
  return (
    
    <div className='Card-container'>
        <label>First Name : </label> 
        <input id="firstname" type="text" onChange={firstNameHandler} value={fname}/>
        <label>Last Name : </label>
        <input id="lastname" type="text" onChange={lastNameHandler} value={lname} />
        <label>Address : </label>
        <input id="address" type="text" onChange={addressHandler} value={address} />
        <label>Date of Birth : </label>
        <input id="dob" type="date" onChange={dobHandler} value={dob} />
        <label>Education : </label>
        <input id="edu" type="text" onChange={educationHandler} value={education} />
        <label>Mobile Number : </label>
        <input id="mob" type="number"  onChange={mobHandler} value={mob}/>
        <button type="Submit" onClick={submitHandler}>Submit</button>
    </div>

  )
}

export default Card