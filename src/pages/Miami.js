import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SecondNav from '../component/SecondNav';
import CardComp from '../component/CardComp';

export default function Miami() {
  const [boatData, setBoatData] = useState([]);

  useEffect(() => {
    // Fetch boat data from the Laravel backend API
    axios.get('http://localhost:8000/boats')
    .then(response => {
      setBoatData(response.data);
    })
    .catch(error => {
      console.error('Error fetching boat data:', error);
    });
  
  }, []); // Empty dependency array to run once on component mount

  return (
    <div  style={{ height: '200vh', width: '100vw', backgroundColor: '#F5E8DD'}} >
      <SecondNav />
      {boatData.map((boat, index) => (
       <CardComp
       key={index}
       title={boat.title}
       subtitle={boat.subtitle}
       imageSrc={`http://127.0.0.1:8000/${boat.image}`} // Replace with correct path
       link={boat.link}
       price={boat.price}
       boatId={boat.id} // Pass the boat ID as the boatId prop
     />
     
      
      ))}
    </div>
  );
}
