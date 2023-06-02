import React from 'react';
import './Registration.css';

const RegistrationList = (props) => {
    console.log("registration Props",props);
  return (
    <div className='registration'>
    <div className='registration-heading'>Registration List </div>
    <table>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Date of Birth</th>
            <th>Education</th>
            <th>Mobile No</th>
        </tr>
        {props.registrationdata.map((user) => 
        <tr>
          <td>{user.firstname}</td>
          <td>{user.lastname}</td>
          <td>{user.Address}</td>
          <td>{user.DOBirth}</td>
          <td>{user.Education}</td>
          <td>{user.Mobile}</td>
          </tr>
        )}
      </table>
    </div>
  )
}

export default RegistrationList