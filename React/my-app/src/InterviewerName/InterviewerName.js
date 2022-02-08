import React from "react";
import '../Candidate/candidate.css'

const InterviewerName = (props) => {
    return(
        // <form className="candidate">
        //     <label>
        //         Interviewer Name:
        //         <input  className="candidate_input" type="text" name="name" />
        //     </label>
        // </form>
        <>
        {props.label}
            <input  className="candidate_input" placeholder="Interviewer Name" type="text" name="name" />

        </>

    )
}

export default InterviewerName;