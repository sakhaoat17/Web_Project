import React from 'react';
import Slider from './Slider';
import image1 from '../images/boat.jpg';
import image2 from '../images/boat1.jpg';
import BoatDetail from './BoatDetail';
import BoatRentalForm from './BoatRentalForm';
import Footter from './footer';
import SecondNav from './SecondNav';



const MoreD = () => {
  
  const images = [image1, image2]; // Define the images array
  return (
    <div>
      <SecondNav/>
      <Slider images={images} /> {/* Pass the images array as a prop */}
   
     <BoatDetail/>
     <BoatRentalForm/>
     <Footter/>

    </div>
  );
};

export default MoreD;
