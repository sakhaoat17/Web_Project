import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SecondNav from '../component/SecondNav';
import Button from 'react-bootstrap/Button';

function AdProfile() {
    const [rentalRequests, setRentalRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchRentalRequests = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/rental-requests`);
                setRentalRequests(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching rental requests:', error);
                setError('Error fetching rental requests. Please try again.');
            }
        };

        fetchRentalRequests();
    }, []);

        
    

    const acceptRequest = async (requestId) => {
        try {
            await axios.put(`http://localhost:8000/accept-request/${requestId}`);
            setRentalRequests(rentalRequests.map(request => {
                if (request.id === requestId) {
                    return { ...request, status: 'accepted' };
                }
                return request;
            }));
        } catch (error) {
            console.error('Error accepting request:', error);
            setError('Error accepting request. Please try again.');
        }
    };

    const deleteRequest = async (requestId) => {
        try {
            await axios.delete(`http://localhost:8000/delete-request/${requestId}`);
            setRentalRequests(rentalRequests.filter(request => request.id !== requestId));
        } catch (error) {
            console.error('Error deleting request:', error);
            setError('Error deleting request. Please try again.');
        }
    };

    return (
        <div style={{ textAlign: 'center', backgroundColor: 'lightblue', backgroundSize: 'cover', minHeight: '100vh' }}>
            <SecondNav/>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div>
                    <h2>Rental Requests:</h2>
                    <table style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'center', border: '1px solid black' }}>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid black', backgroundColor: '#f2f2f2' }}>First Name</th>
                                <th style={{ border: '1px solid black' , backgroundColor: '#f2f2f2'}}>Last Name</th>
                                <th style={{ border: '1px solid black', backgroundColor: '#f2f2f2' }}>Email</th>
                                <th style={{ border: '1px solid black', backgroundColor: '#f2f2f2' }}>Start Date</th>
                                <th style={{ border: '1px solid black', backgroundColor: '#f2f2f2' }}>End Date</th>
                                <th style={{ border: '1px solid black', backgroundColor: '#f2f2f2' }}>Status</th>
                                <th style={{ border: '1px solid black', backgroundColor: '#f2f2f2' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rentalRequests.map(request => (
                                <tr key={request.id}>
                                    <td style={{ border: '1px solid black' }}>{request.firstname}</td>
                                    <td style={{ border: '1px solid black' }}>{request.lastname}</td>
                                    <td style={{ border: '1px solid black' }}>{request.email}</td>
                                    <td style={{ border: '1px solid black' }}>{request.start_date}</td>
                                    <td style={{ border: '1px solid black' }}>{request.end_date}</td>
                                    <td style={{ border: '1px solid black', color: request.status === 'canceled' ? 'red' : (request.status === 'accepted' ? 'green' : 'red') }}>{request.status}</td>
                                    <td style={{ border: '1px solid black' }}>
                                        {request.status === 'pending' && (
                                            <>
                                                
                                                <Button variant="outline-success" onClick={() => acceptRequest(request.id)}>Accept</Button>{' '}
                                            </>
                                        )}
                                        <Button variant="outline-danger" onClick={() => deleteRequest(request.id)}>Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default AdProfile;
