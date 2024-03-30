import './SearchBar.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // Initialize navigate for programmatic navigation

  const handleSearch = () => {
    // Find the route corresponding to the search query
    const place = places.find(place => place.name.toLowerCase() === searchQuery.toLowerCase());
    if (place) {
      navigate(place.route); // Redirect to the corresponding page
    } else {
      // Handle case where place is not found
      alert('Place not found!');
    }
  };

  return (
    <div className="d-flex justify-content-center mb-4">
      <div className="p-1 bg-light rounded rounded-pill shadow-sm" style={{ width: '700px', height: '90px' }}>
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
          <div className="input-group" style={{ width: '600px' }}>
            <input
              type="search"
              placeholder="Where would you like to go boating?"
              aria-describedby="button-addon1"
              className="form-control border-0 bg-light"
              
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="input-group-append">
              <button type="button" className="btn btn-link text-primary" onClick={handleSearch}>
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const places = [
  { name: "Miami", route: "/login" },
  { name: "New York", route: "/new-york" },
  // Add more places as needed
];
