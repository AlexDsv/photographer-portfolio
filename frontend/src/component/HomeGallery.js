import React, { useState } from "react";
import "../styles/components/homegallery.css";
const HomeGallery = ({ images }) => {
  const [mode, setMode] = useState(4);
  return (
    <div className="gallery" id="gallery">
      <div className="gallery-nav">
        <h3>Gallery</h3>
        <div className="gallery-filters">
          <button onClick={() => setMode(2)}>
            <i className="fa-solid fa-table-columns"></i>
          </button>
          <button onClick={() => setMode(4)}>
            <i className="fa-solid fa-table-cells-large"></i>
          </button>
          <button onClick={() => setMode(6)}>
            <i className="fa-solid fa-table-cells"></i>
          </button>
        </div>
      </div>
      <div className={`home-gallery gallery-${mode}`}>
        {images.map((image) => (
          <div key={image.public_id} className="image-card">
            <div className="image-container">
              <img
                key={image.public_id}
                src={image.url}
                alt={image.public_id}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeGallery;
