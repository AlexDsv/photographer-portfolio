import React from "react";
import "../styles/components/footer.css";
import "../styles/components/header.css";
import XLogo from "../assets/X_logo_2023.svg";
import InstagramLogo from "../assets/Instagram_simple_icon.svg";
import MailLogo from "../assets/email-svgrepo-com.svg";
const Footer = () => {
  return (
    <footer>
      <nav>
        <a href="blank">
          <img src={XLogo} alt="X logo" />
        </a>
        <a href="blank">
          <img src={InstagramLogo} alt="Instagram logo" />
        </a>
        <a href="blank">
          <img src={MailLogo} alt="Mail logo" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
