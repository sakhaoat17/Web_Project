import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CardComp({ title, subtitle, imageSrc, link, price, boatId }) {
  return (
    <Card style={{ width: '18rem', margin: '20px 40px', display: 'inline-block' }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body style={{ height: '110px' }}>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
        <Link to={`/moreDD/${boatId}`} >More Details</Link>
        <span style={{ paddingLeft: '75px' }}>{price}</span>
      </Card.Body>
    </Card>
  );
}

export default CardComp;
