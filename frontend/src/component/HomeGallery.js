import React from "react";
import "../styles/components/homegallery.css";
const HomeGallery = ({ images }) => {
  return (
    <div className="gallery">
      <h3>Gallery</h3>
      <div className="home-gallery">
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
