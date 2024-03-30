import React from 'react';
import './Registration.css';
import { Link } from "react-router-dom";


function Registration() {
  return (
    
    <div className='login template d-flex justify-content-center align-items-center vh-100 backk'>
      <div className='form-container p-5 rounded back'>
        <form>
          <h3 className='text-center'>Sign Up</h3>
          <div className='mb-2'> 
            <label htmlFor='First-name'>First Name</label>
            <input type='text' placeholder='First Name' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='Last-name'>Last Name</label>
            <input type='text' placeholder='Last Name' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Email' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter Your password' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='confirm-password'>Confirm Password</label>
            <input type='password' placeholder='Confirm password' className='form-control'/>
          </div>
          <div className='mb-2'>
            <input type='checkbox' className='custom control custom-checkbox '/>
            <label htmlFor='check' className='custom-input-label ms-2'>
              Remember me
            </label>
          </div>
          <div className='d-grid'>
            <button className='btn btn-primary'>Sign Up</button>
          </div>
          <p className='text-right mt-2'>
            Forgot <a href='#'>Password?</a>
            <Link to='/login' className='ms-2'>Log In</Link> {/* Corrected Link */}
          </p>
        </form>
      </div>
      <div>
       
      </div>
    </div>
    
  );
}

export default Registration;
