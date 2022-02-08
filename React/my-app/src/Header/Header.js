import React from "react";
import  logo from '../Images/logo.png';
import './Header.css';


function Header(){
    return (
        <div className="header">
            <img src={logo}/>
        </div>
    )
}

export default Header;