import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './Registration.css';

function BoatRentalForm2({  boatId }) {
    const userId = parseInt(window.localStorage.getItem('userId'));
    const boat=parseInt(boatId);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    start_date: '',
    end_date: '',
    message: '',
    registration_id: userId, // Include userId in formData
   boat_id: boat, // Include boatId in formData
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    // Add validation logic if needed
    return errors;
  };

  const handleSubmit = async (e) => {
    console.log('Form Data:', formData);
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    try {
      const response = await axios.post('http://localhost:8000/rental-request', formData);
      console.log('Rental request submitted successfully:', response.data);
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        start_date: '',
        end_date: '',
        message: '',
       registration_id: userId, // Reset userId
        boat_id: boat, // Reset boatId
      });
      setErrors({});
      // Redirect or perform other actions upon successful form submission
    } catch (error) {
      console.error('Error submitting rental request:', error.response.data);
      setErrors({ confirmPassword: 'Rental request submission failed. Please try again.' });
    }
  };

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 backk'>
      <div className='form-container p-5 rounded back'>
        <form onSubmit={handleSubmit}>
          <h3 className='text-center'>Sign Up</h3>
          <div className='mb-2'> 
            <label htmlFor='firstName'>First Name</label>
            <input type='text' name='firstname' value={formData.firstname} onChange={handleChange} placeholder='First Name' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='last_Name'>Last Name</label>
            <input type='text' name='lastname' value={formData.lastname} onChange={handleChange} placeholder='Last Name' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='password'>phone</label>
            <input type='text' name='phone' value={formData.phone} onChange={handleChange} placeholder='Enter Your phone' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='password'>start</label>
            <input type='date' name='start_date' value={formData.start_date} onChange={handleChange} placeholder='Enter Your phone' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='password'>end</label>
            <input type='date' name='end_date' value={formData.end_date} onChange={handleChange} placeholder='Enter Your phone' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='message'>start</label>
            <textarea name='message' value={formData.message} onChange={handleChange} placeholder='Enter Your phone' className='form-control'/>
          </div>
         
         
          <div className='d-grid'>
            <button type='submit' className='btn btn-primary'>Sign Up</button>
          </div>
          <p className='text-right mt-2'>
            Forgot <a href='#'>Password?</a>
            <Link to='/login' className='ms-2'>Log In</Link>
          </p>
        </form>
      </div>
    </div>
  
  );
}
export default BoatRentalForm2;