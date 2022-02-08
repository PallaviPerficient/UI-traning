import React from "react";

    function Paragraph(){
        var history;
        const redirect = () =>{
            history.pushState('./heading.js')
        }
    return(
        <>
        <div>
            <button onClick={redirect}> Redirect </button>
        </div>
        <h3>Paragraph Component</h3>
        <p>A top priority for React is to develop a strong partnership with Customs Authorities. Currently we work closely with Customs in more than 120 countries around the world.</p>
        <p>Our large network enables us to perform on site investigations, inspections and test purchases in more than 120 countries.</p>
        <p>We make regular market surveys and monitor markets worldwide often resulting in immediate practical enforcement action when counterfeit products are being found.</p>
        <p>The React Online Enforcement Program is designed specifically to facilitate online findings to offline enforcement using the global React anti-counterfeiting program.</p>
        </>
    )
}
 export default Paragraph;