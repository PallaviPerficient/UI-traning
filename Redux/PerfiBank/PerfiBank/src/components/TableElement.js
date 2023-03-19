import React from 'react';

function TableElement({row}) {
    console.log(row)
    let date = row.date ? row.date.getDate() + "-"+ parseInt(row.date.getMonth()+1) +"-"+row.date.getFullYear(): null;
  return <tr>
      <td>{date}</td>
      <td>{row.amtType}</td>
      <td>{row.checkno}</td>
      <td>{row.amount}</td>      
  </tr>;
 
}

export default TableElement;
