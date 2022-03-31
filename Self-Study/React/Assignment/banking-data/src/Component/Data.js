import React from 'react';
import "./Data.scss";


const Data = (props) =>{
   
    return(
        <>
           <div>

                <label className='check'>Check Number : </label>
                <input type="number" name="check_number" onChange={(event) => props?.handlechange(event,props.type)} value={props?.data.check_number} placeholder="Check Number"></input><br></br>
                
                <label className='amount'>Amount : </label>
                <input type="number" name="amount" onChange={(event) => props?.handlechange(event,props.type)} value={props?.data.amount} placeholder="Amount"></input><br></br>
           
            </div>
            <button className='Submit-button'  onClick={() => props?.Submit(props?.type)}>Submit</button><br></br>
        </>
    );
}

export default Data;