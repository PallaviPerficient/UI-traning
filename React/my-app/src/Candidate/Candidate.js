import React from "react";
// 
const Candidate=(props)=>{
    return(
        <>
        {props.label}
            <input  className="candidate_input" placeholder="Candidate Name " type="text" name="name" />
        </>
    )
}

export default Candidate;