import React from 'react'
import './Table.scss'

const Table = (props) => {
    const current = new Date();
    const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;
    return(
        <>
        <table>
            <thead className=''>
                <tr>
                    <th>Sr.No</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Check Number</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
            {
                props?.tabledata?.map((item, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{date}</td>
                            <td>{item.type}</td>
                            <td>{item.check_number}</td>
                            <td>{item.amount}</td>
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