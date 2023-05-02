import React from 'react'
import { MapTo } from '@adobe/aem-react-editable-components';
import './collegemanagement.css'

const CollegeManagementConfig = {
    empty :'CollegeManagement',
    isEmpty: function(props){
        return !props || !props.title
    }
};


const CollegeManagement = (props) => {
    console.log("CollegeManagement",props);
  return (
    <div className='collegeManagement'>
      <div>
        <h4>Student Details</h4>
            <span>Name : {props.name}</span>
            <span>About : {props.about}</span>
            <span>Address : {props.address}</span>
            <span>Email : {props.email}</span>
            <span>Gender : {props.gender}</span>
            <span>Mobile Number : {props.mobnumber}</span>
            <span>Date of Birth : {props.dob}</span>
      </div>
      <div>
        <h4>College Details</h4>
          <span>College Name : {props.collegename}</span>
            <span>College Number : {props.collegeNumber}</span>
            <span>College About : {props.collegeabout}</span>
            <span>College Link : {props.collegelink}</span>
      </div>
      <div>
        <h4>Course Details</h4>
          <span>Course Name : {props.coursename}</span>
            <span>Course Details : {props.coursedetails}</span>
            <span>Stream : {props.stream}</span>
      </div>
    </div>
  )
}

MapTo('wknd-spa-react/components/collegemanagement')(CollegeManagement, CollegeManagementConfig);
