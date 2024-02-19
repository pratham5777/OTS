// // import React, { useState } from 'react';
// // import "./BookingPage.scss";
// // function BookingPage() {
// //     const [bookingDate, setBookingDate] = useState('');
// //     const [fullName, setFullName] = useState('');
// //     const [phoneNumber, setPhoneNumber] = useState('');

// //     const handleBooking = (event) => {
// //         event.preventDefault();
// //         // Here you can implement booking logic, such as sending booking details to the server
// //         console.log("Booking details:", {
// //             bookingDate,
// //             fullName,
// //             phoneNumber
// //         });
// //     };

// //     return (
// //        <div className="booking-container">
// //        <div className="container">
// //             <h2 className='bookingPage'>Ready To Book</h2>
// //             <div>
// //             Fill the below fields to send your booking request to the landlord in just one click 
// //             </div>

// //             <form onSubmit={handleBooking}>
// //             <div className="form-group">
// //                     <label htmlFor="fullName">Name:</label>
// //                     <input type="text" id="fullName" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
// //                 </div>
// //                 <div className="form-group">
// //                     <label htmlFor="bookingDate">Date of Booking:</label>
// //                     <input type="date" id="bookingDate" name="bookingDate" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} required />
// //                 </div>
                
// //                 <div className="form-group">
// //                     <label htmlFor="phoneNumber">Phone Number:</label>
// //                     <input type="tel" id="phoneNumber" name="phoneNumber" pattern="[0-9]{10}" placeholder="Format: +91" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
// //                 </div>
// //                 <div className="form-group">
// //                     <button type="submit">Book Now</button>
// //                 </div>
// //             </form>
// //         </div>
// //         </div>
// //     );
// // }

// // export default BookingPage;
// import React, { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import getCurrentUser from '../../utils/getCurrentUser';
// import newRequest from '../../utils/newRequest';
// import "./BookingPage.scss";
//  // Import newRequest from your API module

// function BookingPage() {
//     const { id } = useParams();
//     const currentUser = getCurrentUser();
//     const navigate = useNavigate();
    
//     const [bookingDate, setBookingDate] = useState('');
//     const [fullName, setFullName] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');

//     const handleBooking = async (event) => {
//         event.preventDefault();

//         const bookingDetails = {
//             gigId: id,
//             buyerId: currentUser._id,
//             date:bookingDate,
//             name: fullName, // Ensure that the key matches the backend expectation (name instead of fullName)
//             phone: phoneNumber // Ensure that the key matches the backend expectation (phone instead of phoneNumber)
//         };

//         try {
//             const response = await newRequest.post(`/book/${id}`, bookingDetails);

//         //     if (response.status === 200) { // Assuming 200 status code indicates successful booking
//         //         console.log('Booking successful!');
//         //         // Redirect or show success message
//         //     } else {
//         //         console.error('Booking failed!');
//         //         // Handle error scenarios
//         //     }
//         // } catch (error) {
//         //     console.error('Error booking:', error);
//         //     // Handle network errors
//         // } 
//         navigate("/");
//         } catch (err) {
//       console.error(err);
//        }
//         console.log(bookingDetails)
//     };


//     return (
//         <div className="boo">
//             <div className="cont">
//                 <h2 className='book'>Ready To Book</h2>
//                 <div>
//                     Fill the below fields to send your booking request to the landlord in just one click 
//                 </div>

//                 <form onSubmit={handleBooking}>
//                     <div className="form-group">
//                         <label htmlFor="fullName">Name:</label>
//                         <input type="text" id="fullName" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="bookingDate">Date of Booking:</label>
//                         <input type="date" id="bookingDate" name="bookingDate" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="phoneNumber">Phone Number:</label>
//                         <input type="tel" id="phoneNumber" name="phoneNumber" pattern="[0-9]{10}" placeholder="Format: +91" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
//                     </div>
                    
//                     <button type="submit">Book Now</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default BookingPage;
//----------3------------

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getCurrentUser from '../../utils/getCurrentUser';
import newRequest from '../../utils/newRequest';
import "./BookingPage.scss";
 // Import newRequest from your API module

function BookingPage() {
    const { id } = useParams();
    const currentUser = getCurrentUser();
    const navigate = useNavigate();
    
    const [bookingDate, setBookingDate] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [gigDetails, setGigDetails] = useState(null);

  useEffect(() => {
    const fetchGigDetails = async () => {
      try {
        // Make a GET request to fetch gig details by ID
        const response = await newRequest.get(`/gigs/single/${id}`); // Adjust the endpoint as per your backend route
        setGigDetails(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching gig details:', error);
      }
    };

    fetchGigDetails();

    // Cleanup function to prevent memory leaks
    return () => {
      // Any cleanup code, if needed
    };
  }, [id]);
   
  

    const handleBooking = async (event) => {
        event.preventDefault();

        const bookingDetails = {
            gigId: id,
            buyerId: currentUser._id,
            date:bookingDate,
            name: fullName, // Ensure that the key matches the backend expectation (name instead of fullName)
            phone: phoneNumber ,// Ensure that the key matches the backend expectation (phone instead of phoneNumber)
            userId:gigDetails.userId
        };

        try {
            const response = await newRequest.post(`/book/${id}`, bookingDetails);

        //     if (response.status === 200) { // Assuming 200 status code indicates successful booking
        //         console.log('Booking successful!');
        //         // Redirect or show success message
        //     } else {
        //         console.error('Booking failed!');
        //         // Handle error scenarios
        //     }
        // } catch (error) {
        //     console.error('Error booking:', error);
        //     // Handle network errors
        // } 
        navigate("/");
        } catch (err) {
      console.error(err);
       }
        console.log(bookingDetails)
    };


    return (
        <div className="booki">
            <div className="contai">
                <h2 className='bookingPa'>Ready To Book</h2>
                <div>
                    Fill the below fields to send your booking request to the landlord in just one click 
                </div>

                <form onSubmit={handleBooking}>
                    <div className="form-group">
                        <label htmlFor="fullName">Name:</label>
                        <input type="text" id="fullName" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bookingDate">Date of Booking:</label>
                        <input type="date" id="bookingDate" name="bookingDate" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" pattern="[0-9]{10}" placeholder="Format: +91" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                    </div>
                    
                    <button type="submit">Book Now</button>
                </form>
            </div>
        </div>
    );
}

export default BookingPage;