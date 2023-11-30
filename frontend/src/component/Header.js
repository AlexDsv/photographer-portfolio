import React from "react";
import "../styles/components/header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  const handleNavLinkClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <NavLink to={"/#home"} onClick={(e) => handleNavLinkClick(e, "home")}>
        <h2>EB</h2>
      </NavLink>

      <nav>
        <NavLink to={"/#home"} onClick={(e) => handleNavLinkClick(e, "home")}>
          Home
        </NavLink>
        <NavLink
          to={"/#gallery"}
          onClick={(e) => handleNavLinkClick(e, "gallery")}
        >
          Gallery
        </NavLink>
        <NavLink
          to={"/#contact"}
          onClick={(e) => handleNavLinkClick(e, "contact")}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
