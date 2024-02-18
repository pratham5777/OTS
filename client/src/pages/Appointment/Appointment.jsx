import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getCurrentUser from '../../utils/getCurrentUser';
import newRequest from '../../utils/newRequest';

function RequestPage() {
    const currentUser = getCurrentUser();
    const navigate = useNavigate();

    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await newRequest.get(`/book/requests/${currentUser._id}`);
                setRequests(response.data);
            } catch (error) {
                console.error('Error fetching requests:', error);
            }
        };

        fetchRequests();
    }, [currentUser._id]);

    console.log(requests)
    console.log(currentUser._id)

    const handleAccept = async (requestId) => {
        try {
            await newRequest.put(`/book/requests/accept/${requestId}`);
            // Optionally, you can update the state to reflect the change
        } catch (error) {
            console.error('Error accepting request:', error);
        }
    };

    const handleReject = async (requestId) => {
        try {
            await newRequest.put(`/book/requests/${requestId}/reject`);
            // Optionally, you can update the state to reflect the change
        } catch (error) {
            console.error('Error rejecting request:', error);
        }
    };

    return (
        <div className="request-container">
            <div className="container">
                <h2>Booking Requests</h2>
                <div>
                    {
                        requests.map(request => (
                            <div key={request._id} className="request">
                                <p>Name: {request.name}</p>
                                <p>Date of Booking: {request.date}</p>
                                <p>Phone Number: {request.phone}</p>
                                <p>{request._id}</p>
                                {/* Add more details as needed */}
                                <button onClick={() => handleAccept(request._id)}>Accept</button>
                                <button onClick={() => handleReject(request._id)}>Reject</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default RequestPage;