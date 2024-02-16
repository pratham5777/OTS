import React, { useState } from 'react';
import "./BookingPage.scss";
function BookingPage() {
    const [bookingDate, setBookingDate] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleBooking = (event) => {
        event.preventDefault();
        // Here you can implement booking logic, such as sending booking details to the server
        console.log("Booking details:", {
            bookingDate,
            fullName,
            phoneNumber
        });
    };

    return (
       <div className="booking-container">
       <div className="container">
            <h2 className='bookingPage'>Ready To Book</h2>
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
                <div className="form-group">
                    <button type="submit">Book Now</button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default BookingPage;
