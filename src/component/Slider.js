import React, { useState } from 'react';
import './Slider.css'; // Import CSS file for styling
import boatImage from '../images/boat.jpg'; // Import image file

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={index === currentIndex ? 'slide active' : 'slide'}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      <button className="prev-btn" onClick={prevSlide}>Prev</button>
      <button className="next-btn" onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slider;
