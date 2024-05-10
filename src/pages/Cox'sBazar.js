import React from 'react'
import SecondNav from '../component/SecondNav'
import boatImage from '../images/boat.jpg';
import CardComp from '../component/CardComp'

export default function CoxBazar() {
  const cardPropsArray = [
    {
      title: "MIAMI BEACH, Florida",
      subtitle: "Azimut | Flybridge | 62ft",
      imageSrc: boatImage,
      link: "/m",
      price: "200$/Day"
    },
    {
      title: "Another Destination",
      subtitle: "Boat Type | Length | Details",
      imageSrc: boatImage,
      link: "#",
      price: "Price"
    },
    {
      title: "Another Destination",
      subtitle: "Boat Type | Length | Details",
      imageSrc: boatImage,
      link: "#",
      price: "Price"
    }
  ];
  return (
    <div>
        <SecondNav/>
        {cardPropsArray.map((props, index) => (
        <CardComp key={index} {...props} />
      ))}

    
    </div>
  )
}
