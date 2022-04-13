import React from 'react'
import './Table.css'

const Table = (props) => {
  
    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>First Name  </th>
                    <th>Last Name </th>
                    <th>Email </th>
                    <th>Phone Number  </th>
                    <th>Company </th>
                    <th>Profile url </th>
                  
                </tr>
            </thead>
            <tbody>
            {
                props?.tabledata?.map((item, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.company}</td>
                            <td>{item.profile_url}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        
        </>

       
    );

}

export default Table;