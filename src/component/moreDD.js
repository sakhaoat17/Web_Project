import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Slider.css'; // Import CSS file for styling
import axios from 'axios';
import BoatRentalForm2 from './BoatRentalForm2';
import SecondNav from './SecondNav';
import Registration from './Registration';
import Footter from './footer';

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

const BoatDetail = ({ boatDetail }) => {
  return (
    <div style={{ backgroundColor: '#F1EEDC', padding: '50px' }} >
      <h1>Boat Details</h1>

      <ul>
        <li><strong>Boat Name:</strong> {boatDetail.title}</li>
        <li><strong>Location:</strong> {boatDetail.location}</li>
        <li><strong>Body Of Water:</strong> {boatDetail.body_of_water}</li>
        <li><strong>Captained:</strong> {boatDetail.captained ? 'Yes' : 'No'}</li>
      </ul>

      <h3>Boat Specifications:</h3>

      <ul>
        <li><strong>Make:</strong> {boatDetail.make}</li>
        <li><strong>Model:</strong> {boatDetail.model}</li>
        <li><strong>Year:</strong> {boatDetail.year}</li>
        <li><strong>Length:</strong> {boatDetail.length} Feet</li>
        <li><strong>Passengers:</strong> {boatDetail.passengers}</li>
      </ul>
    </div>
  );
};

const MoreDD = ({ }) => {
  const [boatDetail, setBoatDetail] = useState(null);
  const [images, setImages] = useState([]);
  const {boatId}=useParams();
  useEffect(() => {
    // Fetch boat detail data from the Laravel backend API
    axios.get(`http://localhost:8000/boat-details/${boatId}`)
      .then(response => {
        setBoatDetail(response.data);
        // Fetch images from the backend
        setImages([response.data.image1, response.data.image2].map(image => `http://localhost:8000/${image}`));
      })
      .catch(error => {
        console.error('Error fetching boat detail data:', error);
      });
  }, [boatId]); // Dependency on boatId to re-fetch data when it changes

  return (
    <div>
      <SecondNav/>
      <Slider images={images} /> {/* Pass the images array as a prop */}
      {boatDetail && <BoatDetail boatDetail={boatDetail} />}
      <BoatRentalForm2 boatId={boatId} />
      <Footter/>
    </div>
  );
};

export default MoreDD;
