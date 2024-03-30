import React from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import Reg from './Registration';

function Login() {
  return (
    
    <div className='login template d-flex justify-content-center align-items-center vh-100 backGG'>
      <div className='form-container p-5 rounded backG'>
        <form>
          <h3 className='text-center'>Sign In</h3>
          <div className='mb-2'> 
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter Your Email' className='form-control'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter Your password' className='form-control'/>
          </div>
          <div className='mb-2'>
            <input type='checkbox' className='custom control custom-checkbox '/>
            <label htmlFor='check' className='custom-input-label ms-2'>
              Remember me
            </label>
          </div>
          <div className='d-grid'>
            <button className='btn btn-primary'>Sign In</button>
          </div>
          <p className='text-right mt-2'>
            Forgot <a href='#'>Password?</a>
            <Link to='/reg' className='ms-2'>Sign Up</Link> {/* Corrected Link */}
          </p>
        </form>
      </div>
      <div>
       
      </div>
    </div>
    
  );
}

export default Login;
