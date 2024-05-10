import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SecondNav from '../component/SecondNav';
import Request from './request-list';
import Button from 'react-bootstrap/Button';

function Profile() {
    const { userId } = useParams(); // Access userId from URL parameters
    const [userData, setUserData] = useState(null);
    const [rentalRequests, setRentalRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Fetch user data from the server using the user ID
                const response = await axios.get(`http://localhost:8000/user/${userId}`);
                setUserData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setError('Error fetching user data. Please try again.');
                setLoading(false);
            }
        };

        const fetchRentalRequests = async () => {
            try {
                // Fetch rental requests for the user from the server
                const response = await axios.get(`http://localhost:8000/rental-requests/${userId}`);
                setRentalRequests(response.data);
            } catch (error) {
                console.error('Error fetching rental requests:', error);
                setError('Error fetching rental requests. Please try again.');
            }
        };

        fetchUserData();
        fetchRentalRequests();
    }, [userId]);

    const cancelRequest = async (requestId) => {
        try {
            // Send cancel request to the server
            await axios.delete(`http://localhost:8000/cancel-request/${requestId}`);
            // Update rental requests after cancellation
            setRentalRequests(rentalRequests.filter(request => request.id !== requestId));
        } catch (error) {
            console.error('Error cancelling request:', error);
            setError('Error cancelling request. Please try again.');
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
                    <h1>Welcome {userData.firstName} {userData.lastName}</h1>
                    <p>Email: {userData.email}</p>
                    {/* Display rental requests */}
                    <h2>Rental Requests:</h2>
                    <table style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'center' }}>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>Boat Name</th>
                                <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>Location</th>
                                <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>Start Date</th>
                                <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>End Date</th>
                                <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>Status</th>
                                <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rentalRequests.map(request => (
                                request.status !== 'canceled' && (
                                    <tr key={request.id}>
                                        <td style={{ border: '1px solid black', padding: '8px' }}>
                                            {/* Pass 'name' as dataType prop to fetch boat name */}
                                            <Request boatId={request.boat_id} dataType="name" />
                                        </td>
                                        <td style={{ border: '1px solid black', padding: '8px' }}>
                                            {/* Pass 'location' as dataType prop to fetch boat location */}
                                            <Request boatId={request.boat_id} dataType="location" />
                                        </td>
                                        <td style={{ border: '1px solid black', padding: '8px' }}>{request.start_date}</td>
                                        <td style={{ border: '1px solid black', padding: '8px' }}>{request.end_date}</td>
                                        <td style={{ border: '1px solid black', padding: '8px', color: request.status === 'pending' ? 'red' : 'green' }}>{request.status}</td>
                                        <td style={{ border: '1px solid black', padding: '8px' }}>
                                            {request.status === 'pending' && (
                                                <Button variant="outline-danger" onClick={() => cancelRequest(request.id)}>Cancel</Button> 
                                            )}
                                        </td>
                                    </tr>
                                )
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default Profile;
