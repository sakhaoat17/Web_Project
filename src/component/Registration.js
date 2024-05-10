import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './Registration.css';

function Registration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    try {
      const response = await axios.post('http://localhost:8000/reg', formData);
      console.log('User registered successfully:', response.data);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        rememberMe: false
      });
      setErrors({});
      // Redirect or perform other actions upon successful registration
    } catch (error) {
      console.error('Registration failed:', error.response.data);
      setErrors({ confirmPassword: 'Registration failed. Please try again.' });
    }
  };
 

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 backk'>
      <div className='form-container p-5 rounded back'>
        <form onSubmit={handleSubmit}>
          <h3 className='text-center'>Sign Up</h3>
          <div className='mb-2'> 
            <label htmlFor='firstName'>First Name</label>
            <input type='text' name='firstName' value={formData.firstName} onChange={handleChange} placeholder='First Name' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' name='lastName' value={formData.lastName} onChange={handleChange} placeholder='Last Name' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' value={formData.password} onChange={handleChange} placeholder='Enter Your password' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input type='password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} placeholder='Confirm password' className='form-control'/>
            {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
          </div>
          <div className='mb-2'>
            <input type='checkbox' name='rememberMe' checked={formData.rememberMe} onChange={handleChange} className='custom control custom-checkbox '/>
            <label htmlFor='rememberMe' className='custom-input-label ms-2'>
              Remember me
            </label>
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

export default Registration;