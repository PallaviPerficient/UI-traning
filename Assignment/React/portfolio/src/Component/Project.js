import React from 'react';
import './Project.css';

const Project = (props) => {
  return (
    <>
        <table className={props.projectvalue  ? ' ' : 'display-none'}>
            <tr>
                <th>Project Name</th>
                <th>Technology</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>AT Ford.com</td>
                <td>HTML, Less, JavaScript, jQuery, React JS and AEM</td>
                <td>• On At Ford.com, I developed UI components and fixed many bugs using HTML, Less, JavaScript, jQuery and React JS</td>
            </tr>
            <tr>
                <td>Change Health Care</td>
                <td>HTML, CSS, React and AEM</td>
                <td>• At Change Health Care I developed UI components like Dropzone etc. and fixed bugs using HTML, CSS and React JS</td>
            </tr>
            <tr>
                <td>Kemin</td>
                <td>HTML, CSS, JavaScript, jQuery and AEM</td>
                <td>• At Kemin, I have fixed bugs using HTML, CSS  and mainly JavaScript and jQuery</td>
            </tr>
            <tr>
                <td>POOL-MY RIDE</td>
                <td>Ionic, Angular, Node js, Firebase</td>
                <td>The POOL-MY RIDE is a web-app which helps the farmer to reduce the cost of transportation
                    through aggregation. The objective is to provide an interface to transport goods to market with minimum cost. The
                    purpose of our project is that the users</td>
            </tr>
            <tr>
                <td>FEEDING INDIA</td>
                <td>Java</td>
                <td>It is a Native mobile application which provide platform where donor can contact charity and fulfill
their requirements with different features.</td>
            </tr>
        </table>
    </>
  )
}

export default Project;