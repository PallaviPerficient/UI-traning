import React from "react";
import "./Header.css";
import image from "../Images/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
    <header className="header">
        <h2>Meals</h2>
        <HeaderCartButton />
    </header>
      <div className="main-image">
        <img src={image} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
