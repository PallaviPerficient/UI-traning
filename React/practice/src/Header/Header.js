import React from "react"; 
import './Header.css';
import tech from "../images/react1.jpg";
import banner from "../images/about_1.jpg";
import udmey1 from "../images/Udmey1.jpg";
import Udmey2 from "../images/Udmey2.png";
import Udmey3 from "../images/Udmey3.png";
const Header = (props)=>{
    return(
    <div>
        <img className="logo" src={tech} />
        <table className="Table">
        <tr>
            <th /><a href="https://www.udemy.com/courses/search/?src=ukw&q=home">Home </a>
            <th /><a href="https://www.udemy.com/courses/search/?src=ukw&q=Search">Search</a>
            <th /><a href="https://www.udemy.com/courses/search/?src=ukw&q=Career">Career</a>
            <th /><a href="https://www.udemy.com/courses/search/?src=ukw&q=portfolio">Portfolio</a>
            <th /><a href="https://www.udemy.com/courses/search/?src=ukw&q=About">About</a>
            <th /><a href="https://www.udemy.com/courses/search/?src=ukw&q=Contact">Contact</a>
        </tr>
        </table>
            <img className="Banner"src={banner} />
        <h1 className="heading">Feature Products</h1>
        <table>
            <tr>
                <td className="feature_image" /><img src={udmey1} />
                <td className="feature_image" /><img src={Udmey2} />
                <td className="feature_image" /><img src={udmey1} />
                <td className="feature_image"/><img src={Udmey2} />
            </tr>
            <tr>
                <td />Product Name
                <td />Product Name
                <td />Product Name
                <td />Product Name   
            </tr>
            <tr>
                <td />$80.00
                <td />$80.00
                <td />$80.00
                <td />$80.00
            </tr>
        </table>
        
    </div>
    
);}

export default Header;