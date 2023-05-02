import React from 'react'
import { MapTo } from '@adobe/aem-react-editable-components';

const CollegeManagementConfig = {
    empty :'CollegeManagement',
    isEmpty: function(props){
        return !props || !props.title
    }
};


const CollegeManagement = (props) => {
    console.log("CollegeManagement",props);
  return (
    <div>
       <table>
        <tr>
          <th><h2>Student Details</h2></th>
          <th><h2>College Details</h2></th>
          <th><h2>Course Details</h2></th>
        </tr>
        <tr>
          <td>Name : {props.name}</td>
          <td>About : {props.about}</td>
          <td>Address : {props.address}</td>
          <td>Email : {props.email}</td>
          <td>Gender : {props.gender}</td>
          <td>Mobile Number : {props.mobnumber}</td>
          <td>Date of Birth : {props.dob}</td>
        </tr>
        <tr>
          <td>College Name : {props.collegename}</td>
          <td>College Number : {props.collegeNumber}</td>
          <td>College About : {props.collegeabout}</td>
          <td>College Link : {props.collegelink}</td>
        </tr>
        <tr>
          <td>Course Name : {props.coursename}</td>
          <td>Course Details : {props.coursedetails}</td>
          <td>Stream : {props.stream}</td>
        </tr>
      </table>
    </div>
  )
}

MapTo('wknd-spa-react/components/collegemanagement')(CollegeManagement, CollegeManagementConfig);
