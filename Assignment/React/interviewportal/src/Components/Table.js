import React from 'react';
import './table.scss';
import trash from '../Images/trash.png';
import Select from 'react-select';

const skills= [
    {
      label: "HTML & CSS",
      value: "HTML & CSS",
    },
    {
      label: "JavaScript",
      value: "JavaScript",
    },
    {
      label: "JQuery",
      value: "JQuery",
    },
    {
        label: "React",
        value: "React",
    },
    {
        label: "Angular",
        value: "Angular",
    },
    {
        label: "View JS",
        value: "View JS",
    },
    {
        label: "Python",
        value: "Python",
    },
  ];
  const rating= [
    {
      label: 1,
      value: 1,
    },
    {
      label: 2,
      value: 2,
    },
    {
      label: 3,
      value: 3,
    },
    {
        label: 4,
        value: 4,
    },
    {
        label: 5,
        value: 5,
    },

  ];
  const myrating= [
    {
      label: 1,
      value: 1,
    },
    {
      label: 2,
      value: 2,
    },
    {
      label: 3,
      value: 3,
    },
    {
        label: 4,
        value: 4,
    },
    {
        label: 5,
        value: 5,
    },

  ];

const Table = () => {
  return (
    <div className='datatable'>
        <div className='datatable_addrow'>+ Add Row</div>
        <table>
            <tr>
                <th>Skills</th>
                <th>Self Rating</th>
                <th>My Rating</th>
                <th>Comments</th>
                <th>Action</th>
            </tr>
            <tr>
                <th>
                    <Select
                      options={skills}
                      className={"skills"}
                    />
                </th>
                <th>
                    <Select
                      options={rating}
                      className={"rating"}
                    />
                </th>
                <th>
                    <Select
                      options={myrating}
                      className={"myrating"}
                    />
                </th>
                <th><input className='comment' type="textarea" name="text"/></th>
                <th><img  src={trash} alt="trash"/></th>
            </tr>
        </table>
    </div>
  )
}

export default Table