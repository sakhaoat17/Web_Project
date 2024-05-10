import React, { useState } from 'react';
import axios from 'axios';
import './BoatRentalForm.css'; // Import your CSS file

function BoatRentalForm({ boatId }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    start_date: '',
    end_date: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Retrieve userId from localStorage
    const userId = window.localStorage.getItem('userId');

    try {
      console.log('Form Data:', formData);
      const response = await axios.post('http://localhost:8000/rental-request', {
        ...formData,
        boat_id: boatId,
        registration_id: userId,
      });
      
      // Handle successful form submission
      console.log('Rental request submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting rental request:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 '>
      <div className='form-container p-5 rounded '>
        <form onSubmit={handleSubmit}> 
          <h3 className='text-center'>Boat Rental Request</h3>
          <div className='mb-2'> 
            <label htmlFor='firstName'>First Name</label>
            <input type='text' value={formData.first_name} onChange={handleChange} placeholder='Enter your First Name' className='form-control' id='first_name'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' value={formData.last_name} onChange={handleChange} placeholder='Enter Your Last Name' className='form-control' id='last_name'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='email'>Email</label>
            <input type='email' value={formData.email} onChange={handleChange} placeholder='Enter Your Email' className='form-control' id='email'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='phone'>Phone</label>
            <input type='tel' value={formData.phone} onChange={handleChange} placeholder='Enter Your Phone Number' className='form-control' id='phone'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='startDate'>Start Date</label>
            <input type='date' value={formData.start_date} onChange={handleChange} className='form-control' id='start_date'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='endDate'>End Date</label>
            <input type='date' value={formData.end_date} onChange={handleChange} className='form-control' id='end_date'/>
          </div>
          <div className='mb-2'> 
            <label htmlFor='message'>Message</label>
            <textarea value={formData.message} onChange={handleChange} placeholder='Enter Your Message' className='form-control' rows='3' id='message'></textarea>
          </div>
          <div className='d-grid'>
            <button className='btn btn-primary' type="submit">Submit Request</button>
          </div>
        </form>
      </div>
      <div>
      </div>
    </div>
  );
}

export default BoatRentalForm;
