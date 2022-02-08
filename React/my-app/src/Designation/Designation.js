import React from "react";

const Desgination=(props)=>{
    return(
    <>
        {props.label}
        <input  className="candidate_input" placeholder="Designation" type="text" name="name" />
    </>
    )
}

export default Desgination;