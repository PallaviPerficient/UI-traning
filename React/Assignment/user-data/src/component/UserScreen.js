//logic

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "./Table";

const UserScreen = (props) => {
  const navigate = useNavigate();

  const [getdata, Setgetdata] = useState([]);
  const [data, Setdata] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    profile_url: " ",
  });

  const handleChange = (e) => {
    const newInput = () => ({ ...data, [e.target.name]: e.target.value });
    Setdata(newInput);
  };

  const Submit = (e) => {
    e.preventDefault();
    const newData = (obj) => [...obj, data];
    Setgetdata(newData);
    // navigate('/displayscreen');
  };

 
  console.log(data);
  console.log(getdata);
  return (
    <div>
      <form onSubmit={Submit}>
        <label>First Name :</label>
        <input name="first_name" type='text'  onChange={handleChange} required />

        <br />

        <label>Last Name :</label>
        <input type='text' name="last_name" onChange={handleChange} required />

        <br />

        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} required />

        <br />

        <label>Mobile Number :</label>
        <input type="tel" name="phone" maxLength={10} onChange={handleChange} required />

        <br />

        <label>Comapny :</label>
        <input type='text' name="company" onChange={handleChange} required />

        <br />

        <label>Profile Url:</label>
        <input type="url" name="profile_url" onChange={handleChange} />

        <br />

        <button type="Submit"> Submit </button>
      </form>
      <Table tabledata={getdata} />
    </div>
  );
};

export default UserScreen;
