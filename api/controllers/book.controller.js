// import BookingModel from "../models/book.model.js";
// export const createBooking = async (req, res) => {
//   try {
//     console.log('Received booking data:', req.body); // Log the received data
    
//     // Extract gigId from URL parameters
//     const { gigId } = req.params;

//     // Destructure other fields from the request body
//     const { date, name, phone, buyerId } = req.body;

//     // Validate or sanitize data if needed

//     // Create a new BookingModel instance with extracted gigId and other fields
//     const newBooking = new BookingModel({ date, name, phone, gigId, buyerId });
    
//     // Save the new booking
//     await newBooking.save();

//     // Respond with success message
//     res.status(201).json({ message: 'Booking created successfully' });
//   } catch (error) {
//     // Handle errors
//     console.error('Error creating booking:', error);
//     res.status(500).json({ message: 'Internal server error', error: error.message });
//   }
// };



// export const getBookings = async (req, res, next) => {
//   try {
//     // Retrieve all bookings from the database
//     const bookings = await BookingModel.find();

//     // Send the bookings as a response
//     res.status(200).json(bookings);
//   } catch (error) {
//     // If an error occurs, pass it to the error handling middleware
//     next(error);
//   }
// };
//---------------------------1------------------------------

import BookingModel from "../models/book.model.js";
export const createBooking = async (req, res) => {
  try {
    console.log('Received booking data:', req.body); // Log the received data
    
    // Extract gigId from URL parameters
    const { gigId } = req.params;

    // Destructure other fields from the request body
    const { date, name, phone, buyerId,userId } = req.body;

    // Validate or sanitize data if needed

    // Create a new BookingModel instance with extracted gigId and other fields
    const newBooking = new BookingModel({ date, name, phone, gigId, buyerId,userId});
    
    // Save the new booking
    await newBooking.save();

    // Respond with success message
    res.status(201).json({ message: 'Booking created successfully' });
  } catch (error) {
    // Handle errors
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};



export const getBookings = async (req, res, next) => {
  try {
    // Retrieve all bookings from the database
    const bookings = await BookingModel.find();

    // Send the bookings as a response
    res.status(200).json(bookings);
  } catch (error) {
    // If an error occurs, pass it to the error handling middleware
    next(error);
  }
};


// gt
// Get booking requests for a specific user
export const getBookingRequests = async (req, res) => {
  try {
    const { userId } = req.params;
    const requests = await BookingModel.find({ userId: userId });
    res.status(200).json(requests);
  } catch (error) {
    console.error('Error fetching booking requests:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Accept a booking request
export const acceptBookingRequest = async (req, res) => {
  // try {
  //   const { requestId } = req.params;
  //   // Update the booking request status in the database (e.g., set status to accepted)
    
  //   res.status(200).json({ message: 'Booking request accepted' });
  // } catch (error) {
  //   console.error('Error accepting booking request:', error);
  //   res.status(500).json({ message: 'Internal server error' });
  // }
  // try {
  //   const { requestId } = req.params;
  //   const booking = await BookingModel.findById(requestId);
  //   if (!booking) {
  //     return res.status(404).json({ message: 'Booking not found' });
  //   }

  //   // Update the status to 'accepted'
  //   booking.status = 'accepted';
  //   await booking.save();

  //   res.status(200).json({ message: 'Booking accepted successfully', booking });
  // } catch (error) {
  //   console.error('Error accepting booking:', error);
  //   res.status(500).json({ message: 'Internal server error' });
  // }

  //** */ 3
  const { bookingId } = req.params; // Assuming the booking ID is received from request params

try {
    const booking = await BookingModel.findByIdAndUpdate(bookingId, { status: 'accepted' }, { new: true });
    if (!booking) {
        return res.status(404).json({ message: 'Booking not found' });
    }
    // If you need to do something after the booking is updated successfully
    // For example, send a response indicating success
    res.status(200).json({ message: 'Booking status updated successfully', booking });
} catch (error) {
    console.error('Error updating booking status:', error);
    res.status(500).json({ message: 'Internal server error' });
}

};

// Reject a booking request
// export const rejectBookingRequest = async (req, res) => {
//   // try {
//   //   const { requestId } = req.params;
//   //   // Update the booking request status in the database (e.g., set status to rejected)
//   //   res.status(200).json({ message: 'Booking request rejected' });
//   // } catch (error) {
//   //   console.error('Error rejecting booking request:', error);
//   //   res.status(500).json({ message: 'Internal server error' });
//   // }
//   try {
//     const { bookingId } = req.params;
//     const booking = await BookingModel.findById(bookingId);
//     if (!booking) {
//       return res.status(404).json({ message: 'Booking not found' });
//     }

//     // Update the status to 'rejected'
//     booking.status = 'rejected';
//     await booking.save();

//     res.status(200).json({ message: 'Booking rejected successfully', booking });
//   } catch (error) {
//     console.error('Error rejecting booking:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };


export const rejectBookingRequest = async (req, res) => {
  // try {
  //   const { requestId } = req.params;
  //   // Update the booking request status in the database (e.g., set status to rejected)
  //   res.status(200).json({ message: 'Booking request rejected' });
  // } catch (error) {
  //   console.error('Error rejecting booking request:', error);
  //   res.status(500).json({ message: 'Internal server error' });
  // }
  try {
    const { bookingId } = req.params;
    
    const booking = await BookingModel.findByIdAndUpdate(bookingId, { status: 'rejected' }, { new: true });
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
  }
  // If you need to do something after the booking is updated successfully
  // For example, send a response indicating success


    res.status(200).json({ message: 'Booking rejected successfully', booking });
  } catch (error) {
    console.error('Error rejecting booking:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};