import React from 'react';
import './Achivement.css';

const Achivement = (props) => {
  return (
    <div className={props.achivevalue ? 'achivement' : 'display-none'}>
        <ul>
            <li>•  HTML, CSS, C, C++, SQL, Java, python etc. certification by Sololearn, Udemy.</li>
            <li>•  Soft Skills, Speak Effectively certification by Udemy </li>
            <li>•  C, C++, HTML Test organized by Spoken Tutorial Project, IIT Bombay.</li>
            <li>•  Won 2nd Position in Monument Making Competition in SBJITMR</li>
            <li>•  Volunteered in “Blood Donation Camp”, “Winter Wear Donation” under Koshish Club.</li>
            <li>•  Volunteered in “Unnat Bharat Abhiyan”.</li>
            <li>•  National level Online Project Paper Competition at Government Polytechnic Nagpur.</li>
            <li>•  Tech-Pro: National Level Online Project Competition 2020 by Maharashtra Institute of Technology
, Aurangabad.
</li>
        </ul>
    </div>
  )
}

export default Achivement