import React from "react";

const InterviewDate = (props) => {
    return(
        <>
        {props.label}
            <input className="candidate_input" placeholder="Interview Date" type="text" name="name" />
        </>

    )
}
export default InterviewDate;