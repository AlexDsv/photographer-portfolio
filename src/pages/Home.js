import React from "react";
import { Parallax } from "react-parallax";
import "../styles/pages/home.css";
import HomeGallery from "../component/HomeGallery";
const Home = () => {
  return (
    <div className="home">
      <Parallax bgImage={require("../assets/bg.jpg")} strength={500}>
        <div className="black-filter"></div>
        <div style={{ height: "100vh" }}>
          <div className="centered-content">
            <img
              src={require("../assets/logo_main.png")}
              alt="emily-photography-logo"
            />
          </div>
        </div>
      </Parallax>
      <HomeGallery />
    </div>
  );
};

export default Home;
