import React from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Tab-One</NavLink>
                </li>
                <li>
                    <NavLink to="/tab-two">Tab-Two</NavLink>
                </li>
                <li>
                    <NavLink to="/tab-three">Tab-Three</NavLink>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar

