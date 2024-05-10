
import './Login.css';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Access navigate function

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8000/login', formData);
      console.log('User authenticated successfully:', response.data);
      const userId = response.data.userId;
      window.localStorage.setItem('userId', userId);
      window.localStorage.setItem('isLoggedIn', true);
      setError('');
      // Redirect to profile page with the user ID as a URL parameter
      navigate(`/profile/${userId}`);
    } catch (error) {
      console.error('Authentication failed:', error.response.data);
      setError('Authentication failed. Please try again.');
    }
  };

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 backGG'>
      <div className='form-container p-5 rounded backG'>
        <form onSubmit={handleSubmit}>
          <h3 className='text-center'>Sign In</h3>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <div className='mb-2'> 
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Enter Your Email' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' value={formData.password} onChange={handleChange} placeholder='Enter Your password' className='form-control'/>
          </div>
          <div className='mb-2'>
            <input type='checkbox' className='custom control custom-checkbox '/>
            <label htmlFor='check' className='custom-input-label ms-2'>
              Remember me
            </label>
          </div>
          <div className='d-grid'>
            <button type='submit' className='btn btn-primary'>Sign In</button>
          </div>
          <p className='text-right mt-2'>
            Forgot <a href='#'>Password?</a>
            <Link to='/reg' className='ms-2'>Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
