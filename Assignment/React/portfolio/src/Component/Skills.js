import React from 'react';
import './Skills.css';

const Skills = (props) => {
    // console.log("skills",props);
  return (
    <>
        <div className={props.skillvalue  ? 'skills' : 'display-none'}>
            <ul>
                <li><b>• Technical skills :</b>computer skills, programming languages, social media, and enterprise software</li>
                <li><b>• Problem-solving skills :</b> creativity, critical thinking, and analytical skills</li>
                <li><b>• Customer-service skills :</b>Active listening, time management, and prioritization</li>
                <li><b>• Interpersonal skills :</b>Communication, teamwork, and empathy</li>
                <li><b>• Leadership skills :</b> decision making, stress management, and organization</li>
                <li><b>• Tools & Editor :</b> VS Code, Dev C++, Sublime Text, Postman, Eclipse</li>
                <li><b>• IDE :</b> Android Studio (Java) (basic)</li>
                <l1><b>• Database :</b>Firebase, MySQL (basic)</l1>
            </ul>
        </div>
    </>
  )
}

export default Skills