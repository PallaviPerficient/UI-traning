import React from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/product">Products</NavLink>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar