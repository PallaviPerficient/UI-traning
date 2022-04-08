import React from 'react';
import "./Data.scss";


const Data = (props) =>{
   
    return(
        <>
           <div>

              <form onSubmit={(e) => props?.Submit(e,props?.type)}>

                <label className='check'>Check Number : </label>
                    <input type="number"  name="check_number" onChange={(event) => props?.handlechange(event,props.type)} value={props?.data.check_number === null ? " " : props?.data.check_number} placeholder="Check Number" required/><br></br>
                    
                    <label className='amount'>Amount : </label>
                    <input type="number"  name="amount" onChange={(event) => props?.handlechange(event,props.type)} value={props?.data.amount === null ? " " : props?.data.amount} placeholder="Amount" required/><br></br>

                    <button className='Submit-button' type='Submit'>Submit</button><br></br>

              </form>
           
            </div>
        </>
    );
}

export default Data;