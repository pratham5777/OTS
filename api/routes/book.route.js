// import express from "express";
// import {  createBooking, getBookings } from "../controllers/book.controller.js";


// const router=express.Router();

// // router.post("/:id",createBooking)
// router.post("/:gigId", createBooking);

// router.get("/bookings", getBookings);

// export default router;
//-----------------------------2------------------------------

import express from "express";
import {  acceptBookingRequest, createBooking, getBookingRequests, getBookings, rejectBookingRequest } from "../controllers/book.controller.js";


const router=express.Router();

// router.post("/:id",createBooking)
router.post("/:gigId", createBooking);

router.get("/bookings", getBookings);

router.get('/requests/:userId', getBookingRequests);

// Route to accept a booking request
router.put('/requests/accept/:bookingId', acceptBookingRequest);

// Route to reject a booking request
router.put('/requests/reject/:bookingId', rejectBookingRequest);

export default router;