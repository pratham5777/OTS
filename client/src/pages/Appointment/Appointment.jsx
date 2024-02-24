// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import getCurrentUser from '../../utils/getCurrentUser';
// import newRequest from '../../utils/newRequest';
// import "./Appointment.scss";
// import { useQuery } from '@tanstack/react-query';

// function RequestPage() {
//     const currentUser = getCurrentUser();
//     const navigate = useNavigate();

//     const [requests, setRequests] = useState([]);

//     useEffect(() => {
//         const fetchRequests = async () => {
//             try {
//                 const response = await newRequest.get(`/book/requests/${currentUser._id}`);
//                 setRequests(response.data);
//             } catch (error) {
//                 console.error('Error fetching requests:', error);
//             }
//         };

//         fetchRequests();
//     }, [currentUser._id]);

//     console.log(requests)
//     console.log(currentUser._id)

//     const handleAccept = async (requestId) => {
//         try {
//             await newRequest.put(`/book/requests/accept/${requestId}`);
//             // Optionally, you can update the state to reflect the change
//         } catch (error) {
//             console.error('Error accepting request:', error);
//         }
//     };

//     const handleReject = async (requestId) => {
//         try {
//             await newRequest.put(`/book/requests//reject/${requestId}`);
//             // Optionally, you can update the state to reflect the change
//         } catch (error) {
//             console.error('Error rejecting request:', error);
//         }
//     };
//     const { data: gigsData, error: gigsError } = useQuery({
//         queryKey: ["gigs"],
//         queryFn: () =>
//           newRequest.get('/gigs').then((res) => {
//             return res.data;
//           }),
//       });
//     const getGigDescription = (gigId) => {
//         if (!gigsData || gigsData.length === 0) {
//           return "N/A";
//         }
    
//         const gig = gigsData.find((gig) => gig._id === gigId);
//         return gig ? gig.desc : "N/A";
//       };

//     return (
//         <div className="request-contain">
//             <div className="contain">
//                 <h2>Booking Requests</h2>
//                 <div>
//                     {
//                         requests.map(request => (
//                             <div key={request._id} className="request">
//                                 <p>Name: {request.name}</p>
//                                 <p>Date of Booking: {request.date}</p>
//                                 <p>Phone Number: {request.phone}</p>
//                                 <p>Property Name: {getGigDescription(request.gigId)}</p>
//                                 {/* <p>{request._id}</p> */}
//                                 {/* Add more details as needed */}
//                                 <button className="accept" onClick={() => handleAccept(request._id)}>Accept</button>
// <button className="reject" onClick={() => handleReject(request._id)}>Reject</button>

//                             </div>
//                         ))
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default RequestPage;

//---------------removed accept & reject button------------

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getCurrentUser from '../../utils/getCurrentUser';
import newRequest from '../../utils/newRequest';
import "./Appointment.scss";    ``
import { useQuery } from '@tanstack/react-query';

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
            // Update the request status to "booked"
            const updatedRequests = requests.map(request =>
                request._id === requestId ? { ...request, status: 'booked' } : request
            );
            setRequests(updatedRequests);
        } catch (error) {
            console.error('Error accepting request:', error);
        }
    };

    const handleReject = async (requestId) => {
        try {
            await newRequest.put(`/book/requests/reject/${requestId}`);
            // Filter out the rejected request from the state
            const updatedRequests = requests.filter(request => request._id !== requestId);
            setRequests(updatedRequests);
        } catch (error) {
            console.error('Error rejecting request:', error);
        }
    };

    const { data: gigsData, error: gigsError } = useQuery({
        queryKey: ["gigs"],
        queryFn: () =>
          newRequest.get('/gigs').then((res) => {
            return res.data;
          }),
      });

    const getGigDescription = (gigId) => {
        if (!gigsData || gigsData.length === 0) {
          return "N/A";
        }
    
        const gig = gigsData.find((gig) => gig._id === gigId);
        return gig ? gig.desc : "N/A";
    };

    return (
        <div className="request-contain">
            <div className="contain">
                <h2>Booking Requests</h2>
                <div>
                    {
                        requests.map(request => (
                            <div key={request._id} className="request">
                                <p>Name: {request.name}</p>
                                <p>Date of Booking: {request.date}</p>
                                <p>Phone Number: {request.phone}</p>
                                <p>Property Name: {getGigDescription(request.gigId)}</p>
                                {/* Conditionally render based on the status */}
                                {request.status === 'booked' && <p>Status: Booked</p>}
                                {/* Add more details as needed */}
                                <button className="accept" onClick={() => handleAccept(request._id)}>Accept</button>
                                <button className="reject" onClick={() => handleReject(request._id)}>Reject</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
} devicePixelRatio

export default RequestPage;
