import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './Registration.css';

function BoatList() {
  const [formData, setFormData] = useState({
    id:'',
    title: '',
    subtitle: '',
    image: '',
    link: '',
    price: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/boats', formData);
      console.log('Boat registered successfully:', response.data);
      setFormData({
        id:'',
        title: '',
        subtitle: '',
        image: '',
        link: '',
        price: ''
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
    <div className='registration-template d-flex justify-content-center align-items-center vh-100 backk'>
      <div className='form-container p-5 rounded back'>
        <form onSubmit={handleSubmit}>
          <h3 className='text-center'>Boat Registration</h3>
          {successMessage && <p className="text-success">{successMessage}</p>}
          <div className='mb-2'> 
            <label htmlFor='id'>ID</label>
            <input type='number' name='id' value={formData.id} onChange={handleChange} placeholder='Boat Id' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' value={formData.title} onChange={handleChange} placeholder='Title' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='subtitle'>Subtitle</label>
            <input type='text' name='subtitle' value={formData.subtitle} onChange={handleChange} placeholder='Subtitle' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='image'>Image</label>
            <input type='text' name='image' value={formData.image} onChange={handleChange} placeholder='Image URL' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='link'>Link</label>
            <input type='text' name='link' value={formData.link} onChange={handleChange} placeholder='Link' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='price'>Price</label>
            <input type='text' name='price' value={formData.price} onChange={handleChange} placeholder='Price' className='form-control'/>
          </div>
          <div className='d-grid'>
            <button type='submit' className='btn btn-primary'>Submit</button>
          </div>
          <p className='text-right mt-2'>
            <Link to='/addmore' className='ms-2'>Add more detail</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default BoatList;
