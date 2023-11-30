import React from "react";
import "../styles/components/footer.css";
import "../styles/components/header.css";
import XLogo from "../assets/X_logo_2023.svg";
import InstagramLogo from "../assets/Instagram_simple_icon.svg";
import MailLogo from "../assets/email-svgrepo-com.svg";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <nav>
        <NavLink>
          <img src={XLogo} alt="X logo" />
        </NavLink>
        <NavLink>
          <img src={InstagramLogo} alt="Instagram logo" />
        </NavLink>
        <NavLink>
          <img src={MailLogo} alt="Mail logo" />
        </NavLink>
      </nav>
      FOOTER ICI
    </footer>
  );
};

export default Footer;
