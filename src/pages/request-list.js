import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Request({ boatId, dataType }) {
    const [boatData, setBoatData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBoatData = async () => {
            try {
                // Fetch boat data from the server using the boat ID
                const response = await axios.get(`http://localhost:8000/boat-details/${boatId}`);
                setBoatData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching boat data:', error);
                setError('Error fetching boat data. Please try again.');
                setLoading(false);
            }
        };

        if (boatId) {
            fetchBoatData();
        }
    }, [boatId, dataType]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : boatData ? (
                <div>
                    {/* Display boat data based on the dataType prop */}
                    {dataType === 'name' && <p> {boatData.title}</p>}
                    {dataType === 'location' && <p> {boatData.location}</p>}
                    {/* Add more display logic for other boat data */}
                </div>
            ) : (
                <p>No boat data available for Boat ID {boatId}</p>
            )}
        </div>
    );
}

export default Request;
