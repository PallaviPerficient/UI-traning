import React from 'react';
import './About.css'
const About = (props) => {
    
    return (
       <>
         <div className={props.aboutValue ? 'about' : 'display-none'}>
         To pursue a challenging career in the field of Computer Science and be a part of progressive organization that gives a scope to enhance my knowledge and utilizing my skills towards the growth of the organization.
        </div>
       </>
    )
}

export default About;