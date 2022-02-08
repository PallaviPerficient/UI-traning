import React from "react";
import Desgination from "../Designation/Designation";

const Selection= (props)=>{
    return(
    <>
        {props.label}
        <input  className="candidate_input" placeholder="Selection Status" type="text" name="name" />

    </>
    )
}

export default Selection;