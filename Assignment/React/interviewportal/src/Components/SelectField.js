import React from 'react';
import './selectfield.scss';
import Select from 'react-select';

const selection = [
    {
      label: "Select",
      value: "Select",
    },
    {
      label: "Reject",
      value: "Reject",
    },
    {
      label: "Hold",
      value: "Hold",
    },
  ];

  const designation = [
    {
      label: "Intern Consulting",
      value: "Intern Consulting",
    },
    {
        label: "Associate Technical Consulting",
        value: "Associate Technical Consulting",
    },
    {
      label: "Technical Consultant",
      value: "Technical Consultant",
    },
    {
        label: "Senior Technical Consultant",
        value: "Senior Technical Consultant",
    },
    {
        label: "Lead Technical Consultant",
        value: "Lead Technical Consultant",
    },
    {
        label: "Technical Architect",
        value: "Technical Architect",
    },
    {
        label: "Senior Technical Architect",
        value: "Senior Technical Architect",
    },
  ];


const SelectField = () => {
  return (
    <div className='selectfield'>
         <div className='selectfield_selection'>
            <label>Selection Status : </label>
            <Select
                options={selection}
                className={"selection"}
            />
        </div>
        <div className='selectfield_designation'>
        <label>Designation : </label>
            {/* <select>
                {designation.map((designation) => (
                <option value={designation.value}>{designation.label}</option>
                ))}
            </select> */}
            <Select
                options={designation}
                className={"designation"}
            />
        </div>
    </div>   
  )
}

export default SelectField