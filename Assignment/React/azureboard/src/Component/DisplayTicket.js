import React from 'react';
import '../App.css'

const DisplayTicket = (props) => {
  return (
    <>
        <table className='createTicket'>
            <thead>
                <tr>
                    Ticket Title:
                </tr>
            </thead>
            <tbody>
            {
                props?.tabledata?.map((item)=>{
                    return(
                            <input value={item.ticket_title}/>
                    )
                })
            }
            </tbody>
        </table>
    </>
  )
}

export default DisplayTicket