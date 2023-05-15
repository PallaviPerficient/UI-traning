import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Tab-One</Link>
                </li>
                <li>
                    <Link to="/tab-two">Tab-Two</Link>
                </li>
                <li>
                    <Link to="/tab-three">Tab-Three</Link>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar

