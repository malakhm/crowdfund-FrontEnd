import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import './Admin-announcements.css'
import SideBar from '../../../Components/Side-bar/Side-bar.js'
import AdminMenu from '../../../Components/Admin-menu/admin-menu'
function AdminAnnouncements() {
  return (
    <>
    <SideBar><AdminMenu/></SideBar>
    <div className='Announcements-main-container container d-flex justify-content-center '>
      <form className='d-flex container '>
        <input type="text" />
        <Button variant="warning" >Send</Button>
      </form>
    </div>
    </>
  )
}

export default AdminAnnouncements


// import { useLocation } from "react-router-dom";
// import React, { useState } from "react";
// import { Link } from 'react-router-dom';
// import Fund from "../../22.png";
// import Buttony from "../../../Components/Button-yellow/Button.js";
// import axios from 'axios';

// // const ButtonLink = ({ to, children }) => {
// //   return (
// //     <Link to={to}>
// //       <Buttony type="submit">{children}</Buttony>
// //     </Link>
// //   );
// // };


// const RegistrationTwo = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const submitUserData = async (userData) => {
//     try {
//       const response = await axios.post('http://localhost:8100/api/users/', userData);
//       console.log(response.data); // Handle successful response
//     } catch (error) {
//       console.error('Error:', error); // Handle error
//     }
//   };


//   // Accessing data from link state object
//   const location = useLocation();
//   const data = location.state;
 
//   console.log(data)

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     if (password !== confirmPassword) {
//       console.log("Passwords don't match");
//       return;
//     }
  

    
//     e.preventDefault();

//     // Do something with the form data
//     console.log("Username:", username);
//     console.log("Password:", password);
//     console.log("Confirm Password:", confirmPassword);


//   };

//   return (
//     <div className="custom-container vh-100 w-100">
//       <div className="Logo-img">
//         <img src={Fund} alt="" className="reg-form-logo" />
//       </div>
//       <div className="headings-title">Registration</div>
//       <form
//         className="container mt-5 w-25 d-flex flex-column gap-3 container-custom-input-width"
//         onSubmit={handleSubmit}
//       >
//                  <div className="mb-3">
//            <div className="input-group">
//              <span className="input-group-text bg-transparent text-white">
//                <i className="bi bi-person"></i>
//              </span>
//             <input
//               type="text"
//               className="form-control bg-transparent custom-input-loginPage text-white"
//               id="formGroupExampleInput"
//               placeholder="Enter your first name"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="mb-3">
//           <div className="input-group">
//             <span className="input-group-text bg-transparent text-white">
//               <i className="bi bi-lock"></i>
//             </span>
//             <input
//               type="password"
//               className="form-control bg-transparent custom-input-loginPage text-white"
//               id="formGroupExampleInput"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="mb-3">
//           <div className="input-group">
//             <span className="input-group-text bg-transparent text-white">
//               <i className="bi bi-lock"></i>
//             </span>
//             <input
//               type="password"
//               className="form-control bg-transparent custom-input-loginPage text-white"
//               id="formGroupExampleInput"
//               placeholder="Confirm your password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </div>
//         </div>
        

//         <div className="btn btn-warning d-flex justify-content-center align-self-center w-50">
//           {/* <Buttony type="submit">
//             <b>Submit</b>
//           </Buttony> */}
//           <Link to="/registration1">
//           <Buttony type="submit"><b>Submit</b></Buttony>
//         </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default RegistrationTwo;
