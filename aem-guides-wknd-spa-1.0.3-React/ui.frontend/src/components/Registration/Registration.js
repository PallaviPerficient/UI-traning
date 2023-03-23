import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import './registration.scss'

const RegistrationConfig = {
  emptyLabel: 'Registration Component',
    isEmpty: function(props) {
      return !props || !props.title;
  }
};
const Registration = (props) => {
  console.log("props Registration",props);

  const submit = () => {
    alert("Registration Completed")
  }
    
    let today = new Date(props.dob);
    let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();
  

  return (
    <>
      <img src={props.fileReference} alt="Registration Image"/>
      <div className='Registration'>
      <div className='Registration_heading'>Registration</div>

       <div className='Registration_field'>
          <div className='Registration_field_firstname'>First Name : <input value={props.firstname}/></div>
          <div className='Registration_field_lastname'>Last Name : <input value={props.lastname}/></div>
          <div className='Registration_field_dob'>Date of Birth :<input value={date}/></div>
          <div className='Registration_field_suggestion'>Suggestion : <textarea value={props.suggestion}/></div>
          <button onClick={submit}>Submit</button>
       </div>
      </div>
    </>
  )
}
MapTo('wknd-spa-react/components/Registration')(Registration, RegistrationConfig);
