// // import React from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import "./Orders.scss";
// // import { useQuery } from "@tanstack/react-query";
// // import newRequest from "../../utils/newRequest";

// // const Orders = () => {
// //   const currentUser = JSON.parse(localStorage.getItem("currentUser"));

// //   const navigate = useNavigate();
// //   const { isLoading, error, data } = useQuery({
// //     queryKey: ["orders"],
// //     queryFn: () =>
// //       newRequest.get(`/orders`).then((res) => {
// //         return res.data;
// //       }),
// //   });

  

// //   const handleContact = async (order) => {
// //     const sellerId = order.sellerId;
// //     const buyerId = order.buyerId;
// //     const id = sellerId + buyerId;

// //     try {
// //       const res = await newRequest.get(`/conversations/single/${id}`);
// //       navigate(`/message/${res.data.id}`);
// //     } catch (err) {
// //       if (err.response.status === 404) {
// //         const res = await newRequest.post(`/conversations/`, {
// //           to: currentUser.seller ? buyerId : sellerId,
// //         });
// //         navigate(`/message/${res.data.id}`);
// //       }
// //     }
// //   };
// //   return (
// //     <div className="orders">
// //       {isLoading ? (
// //         "loading"
// //       ) : error ? (
// //         "error"
// //       ) : (
// //         <div className="container">
// //           <div className="title">
// //             <h1>Orders</h1>
// //           </div>
// //           <table>
// //             <tr>
// //               <th>Image</th>
// //               <th>Title</th>
// //               <th>Price</th>
// //               <th>Contact</th>
// //             </tr>
// //             {data.map((order) => (
// //               <tr key={order._id}>
// //                 <td>
// //                   <img className="image" src={order.img} alt="" />
// //                 </td>
// //                 <td>{order.title}</td>
// //                 <td>{order.price}</td>
// //                 <td>
// //                   <img
// //                     className="message"
// //                     src="./img/message.png"
// //                     alt=""
// //                     onClick={() => handleContact(order)}
// //                   />
// //                 </td>
// //               </tr>
// //             ))}
// //           </table>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Orders;



// // import React ,{ useState, useEffect } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import "./Orders.scss";
// // import { useQuery } from "@tanstack/react-query";
// // import newRequest from "../../utils/newRequest";
// // import getCurrentUser from "../../utils/getCurrentUser";

// // const Bookings = () => {
// //   // const currentUser = JSON.parse(localStorage.getItem("currentUser"));
// //   const currentUser = getCurrentUser();
// //   const currentUserId = currentUser._id;

 
// //   const { isLoading, error, data } = useQuery({
// //     queryKey: ["bookings"],
// //     queryFn: () =>
// //       newRequest.get('/book/bookings').then((res) => {
// //         return res.data;
// //       }),
// //   });
// //   const navigate = useNavigate();
  
// //   const [usersMap, setUsersMap] = useState({});

// //   useEffect(() => {
// //     const fetchUsers = async () => {
// //       try {
// //         const response = await newRequest.get("/users");
// //         const users = response.data.reduce((acc, user) => {
// //           acc[user._id] = user.username;
// //           return acc;
// //         }, {});
// //         setUsersMap(users);
// //       } catch (error) {
// //         console.error("Error fetching users:", error);
// //       }
// //     };
// //     fetchUsers();
// //   }, []);
  
// //   // useEffect(() => {
// //   //   const fetchUsers = async () => {
// //   //     try {
// //   //       const response = await newRequest.get("/users");
// //   //       const users = response.data.reduce((acc, user) => {
// //   //         acc[user._id] = user.username;
// //   //         return acc;
// //   //       }, {});
// //   //       setUsersMap(users);
// //   //     } catch (error) {
// //   //       console.error("Error fetching users:", error);
// //   //     }
// //   //   };
// //   //   fetchUsers();
// //   // }, []);

// //   const { data: gigsData, error: gigsError } = useQuery({
// //     queryKey: ["gigs"],
// //     queryFn: () =>
// //       newRequest.get('/gigs').then((res) => {
// //         return res.data;
// //       }),
// //   });

// //   const getGigDescription = (gigId) => {
// //     if (!gigsData || gigsData.length === 0) {
// //       return "N/A";
// //     }

// //     const gig = gigsData.find((gig) => gig._id === gigId);
// //     return gig ? gig.desc : "N/A";
// //   };

// //   const [filteredBookings, setFilteredBookings] = useState([]);

// //   useEffect(() => {
// //     if (data) {
// //       const filtered = data.filter(booking => booking.buyerId === currentUserId);
// //       setFilteredBookings(filtered);
// //     }
// //   }, [data, currentUserId]);
  
// //  console.log(currentUser)
  
// //   console.log(data)
// //   return (
// //     <div className="bookings">
// //       {isLoading ? (
// //         "loading"
// //       ) : error ? (
// //         "error"
// //       ) : (
// //         <div className="container">
// //           <div className="title">
// //             <h1>Bookings</h1>
// //           </div>
// //           <table>
// //             <thead>
// //               <tr>
// //                 <th>Date and Time</th>
// //                 <th>Name</th>
// //                 <th>Phone</th>
// //                 {/* <th>Gig ID</th> */}
// //                 {/* <th>User Name</th> */}
// //                 <th>Property Name</th>
// //               </tr>
// //             </thead>
// //             {/* <tbody>
// //               {data.map((booking) => (
// //                 <tr key={booking._id}>
// //                   <td>{booking.date}</td>
// //                   <td>{booking.name}</td>
// //                   <td>{booking.phone}</td>
// //                   <td>{booking.gigId}</td>
// //                   <td>{booking.userId}</td>
// //                   <td>{usersMap[booking.buyerId]}</td>
// //                 </tr>
// //               ))}
// //             </tbody> */}
// //             <tbody>
// //               {filteredBookings.map((booking) => (
// //                 <tr key={booking._id}>
// //                   <td>{booking.date}</td>
// //                   <td>{booking.name}</td>
// //                   <td>{booking.phone}</td>
// //                   {/* <td>{booking.gigId}</td> */}
// //                   {/* <td>{booking.buyerId}</td> */}
// //                   <td>{getGigDescription(booking.gigId)}</td>
// //                   {/* <td>{usersMap[booking.buyerId]}</td> */}
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Bookings;  

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Orders.scss";
// import { useQuery } from "@tanstack/react-query";
// import newRequest from "../../utils/newRequest";
// import getCurrentUser from "../../utils/getCurrentUser";

// const Bookings = () => {
//   const currentUser = getCurrentUser();
//   const currentUserId = currentUser._id;
//   const isSeller = currentUser.isSeller;

//   const [usersMap, setUsersMap] = useState({});
//   const [filteredBookings, setFilteredBookings] = useState([]);

//   const { isLoading, error, data } = useQuery({
//     queryKey: ["bookings"],
//     queryFn: () =>
//       newRequest.get('/book/bookings').then((res) => {
//         return res.data;
//       }),
//   });

//   // useEffect(() => {
//   //   const fetchUsers = async () => {
//   //     try {
//   //       const response = await newRequest.get("/users");
//   //       const users = response.data.reduce((acc, user) => {
//   //         acc[user._id] = user.username;
//   //         return acc;
//   //       }, {});
//   //       setUsersMap(users);
//   //     } catch (error) {
//   //       console.error("Error fetching users:", error);
//   //     }
//   //   };
//   //   fetchUsers();
//   // }, []);

//   useEffect(() => {
//     if (data) {
//       const filtered = data.filter(booking => booking.buyerId === currentUserId);
//       setFilteredBookings(filtered);
//     }
//   }, [data, currentUserId]);
  
//   const { data: gigsData, error: gigsError } = useQuery({
//     queryKey: ["gigs"],
//     queryFn: () =>
//       newRequest.get('/gigs').then((res) => {
//         return res.data;
//       }),
//   });

//   console.log(data)

//   const getGigDescription = (gigId) => {
//     if (!gigsData || gigsData.length === 0) {
//       return "N/A";
//     }

//     const gig = gigsData.find((gig) => gig._id === gigId);
//     return gig ? gig.desc : "N/A";
//   };

//   return (
//     <div className="booki">
//       {isLoading ? (
//         "loading"
//       ) : error ? (
//         "error"
//       ) : (
//         <div className="contai">
//           <div className="titl">
//             <h1>Bookings</h1>
//           </div>
//           <table>
//             <thead>
//               <tr>
//                 <th>Date and Time</th>
//                 <th>Name</th>
//                  <th>Phone</th>
//                 <th>Property Name</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredBookings.map((booking) => (
//                 <tr key={booking._id}>
//                   <td>{booking.date}</td>
//                   <td>{booking.name}</td>
//                    <td>{booking.phone}</td>
//                   <td>{getGigDescription(booking.gigId)}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Bookings;

//---------------2-------------------

// ------yeah Page show ker rha hai ki  Kitni mene bookings ki hai ek property me

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Orders.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import getCurrentUser from "../../utils/getCurrentUser";
import "./Orders.scss";

const Bookings = () => {
  const currentUser = getCurrentUser();
  const currentUserId = currentUser._id;
  const isSeller = currentUser.isSeller;
  const navigate = useNavigate(); // Define useNavigate here

  const [usersMap, setUsersMap] = useState({});
  const [filteredBookings, setFilteredBookings] = useState([]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["bookings"],
    queryFn: () =>
      newRequest.get('/book/bookings').then((res) => {
        return res.data;
      }),
  });

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await newRequest.get("/users");
  //       const users = response.data.reduce((acc, user) => {
  //         acc[user._id] = user.username;
  //         return acc;
  //       }, {});
  //       setUsersMap(users);
  //     } catch (error) {
  //       console.error("Error fetching users:", error);
  //     }
  //   };
  //   fetchUsers();
  // }, []);

  useEffect(() => {
    if (data) {
      const filtered = data.filter(booking => booking.buyerId === currentUserId);
      setFilteredBookings(filtered);
    }
  }, [data, currentUserId]);
  
  const { data: gigsData, error: gigsError } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest.get('/gigs').then((res) => {
        return res.data;
      }),
  });

  console.log(data)
  const handleContact = async (order) => {
    const sellerId = order.userId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;
    console.log(sellerId)
    console.log(buyerId)
    console.log(id)

    try {
      const res = await newRequest.get(`/conversations/single/${id}`);
      navigate(`/message/${res.data.id}`);
    } catch (err) {
      if (err.response.status === 404) {
        const res = await newRequest.post(`/conversations/`, {
          to: currentUser.seller ? buyerId : sellerId,
        });
        navigate(`/message/${res.data.id}`);
      }
    }
  };
  console.log(data)

  const getGigDescription = (gigId) => {
    if (!gigsData || gigsData.length === 0) {
      return "N/A";
    }

    const gig = gigsData.find((gig) => gig._id === gigId);
    return gig ? gig.desc : "N/A";
  };

  return (
    <div className="bookin">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="contar">
          <div className="tit">
            <h1>Bookings</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>Date and Time</th>
                <th>Name</th>
                {isSeller && <th>Phone</th>}
                <th>Property Name</th>
                <th>Status</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr key={booking._id}>
                  <td>{booking.date}</td>
                  <td>{booking.name}</td>
                  {isSeller && <td>{booking.phone}</td>}
                  <td>{getGigDescription(booking.gigId)}</td>
                  <td>{booking.status}</td>
                  <td>
                    
  {booking.status === 'accepted' && (
    <img
      className="messag"
      src="./img/message.png"
      alt=""
      onClick={() => handleContact(booking)}
    />
  )}
</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Bookings;

