import React from "react";
import "../styles/components/header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <NavLink to={"/"}>
        <h2>EB</h2>
      </NavLink>

      <nav>
        <NavLink>Home</NavLink>
        <NavLink>Gallery</NavLink>
        <NavLink>Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;
