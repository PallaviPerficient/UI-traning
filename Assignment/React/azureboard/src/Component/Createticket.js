import React, { useState } from "react";
import DisplayTicket from "./DisplayTicket";

const Createticket = () => {
    const [getdata, Setgetdata] = useState([]);
  const [data, Setdata] = useState({
    ticket_title: ""
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
        <label>Ticket Title :</label>
        <input name="ticket_title" type='text'  onChange={handleChange} required />
        <button type="Submit"> Submit </button>
      </form>
      <DisplayTicket tabledata={getdata} />
    </div>
  )
}

export default Createticket