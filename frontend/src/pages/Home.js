import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import "../styles/pages/home.css";
import HomeGallery from "../component/HomeGallery";
import axios from "axios";
import Contact from "../component/Contact";
const Home = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/images");
      console.log(response.data);
      setImages(response.data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des images : ", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="home" id="home">
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
      <HomeGallery images={images} />
      <Contact />
    </div>
  );
};

export default Home;
