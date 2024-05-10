import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './boatList.css';

function BoatList2() {
  const [formData, setFormData] = useState({
    boat_id: '',
    title: '',
    location: '',
    body_of_water: '',
    captained: false,
    make: '',
    model: '',
    image1: '',
    image2: '',
    year: '',
    length: '',
    passengers: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/boat-details', formData);
      console.log('Boat registered successfully:', response.data);
      setFormData({
        boat_id: '',
        title: '',
        location: '',
        body_of_water: '',
        captained: false,
        make: '',
        model: '',
        image1: '',
        image2: '',
        year: '',
        length: '',
        passengers: ''
      });
      setErrors({});
      setSuccessMessage('Boat registered successfully!');
      // Redirect or perform other actions upon successful boat registration
    } catch (error) {
      console.error('Boat registration failed:', error.response.data);
      setErrors({ confirmPassword: 'Boat registration failed. Please try again.' });
      setSuccessMessage('');
    }
  };
 
  return (
    <div className='registration-template d-flex justify-content-center align-items-center vh-100 bc '>
      <div className='form-container p-5 rounded '>
        <form onSubmit={handleSubmit}>
          <h3 className='text-center'>Boat Registration</h3>
          {successMessage && <p className="text-success">{successMessage}</p>}
          <div className='mb-2'> 
            <label htmlFor='boat_id'>Boat ID</label>
            <input type='number' name='boat_id' value={formData.boat_id} onChange={handleChange} placeholder='Boat ID' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' value={formData.title} onChange={handleChange} placeholder='Title' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='location'>Location</label>
            <input type='text' name='location' value={formData.location} onChange={handleChange} placeholder='Location' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='body_of_water'>Body of Water</label>
            <input type='text' name='body_of_water' value={formData.body_of_water} onChange={handleChange} placeholder='Body of Water' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='captained'>Captained</label>
            <input type='checkbox' name='captained' checked={formData.captained} onChange={handleChange} className='form-check-input'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='make'>Make</label>
            <input type='text' name='make' value={formData.make} onChange={handleChange} placeholder='Make' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='model'>Model</label>
            <input type='text' name='model' value={formData.model} onChange={handleChange} placeholder='Model' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='image1'>Image 1</label>
            <input type='text' name='image1' value={formData.image1} onChange={handleChange} placeholder='Image URL 1' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='image2'>Image 2</label>
            <input type='text' name='image2' value={formData.image2} onChange={handleChange} placeholder='Image URL 2' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='year'>Year</label>
            <input type='text' name='year' value={formData.year} onChange={handleChange} placeholder='Year' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='length'>Length</label>
            <input type='text' name='length' value={formData.length} onChange={handleChange} placeholder='Length' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='passengers'>Passengers</label>
            <input type='text' name='passengers' value={formData.passengers} onChange={handleChange} placeholder='Passengers' className='form-control'/>
          </div>
          <div className='d-grid'>
            <button type='submit' className='btn btn-primary'>Submit</button>
          </div>
          <p className='text-right mt-2'>
            <Link to='/login' className='ms-2'>Add more detail</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default BoatList2;
