import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({cartItems}) => {
  return (
    <header className="header">
      <div>
        <h2>
          <Link to="/" className="logo">
            Shopping
          </Link>
        </h2>
      </div>

      <div className="header-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/cart">
            <i className="fas fa-shopping-cart" />
            <span className="cart-length">{cartItems.length === 0 ? "" : cartItems.length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
