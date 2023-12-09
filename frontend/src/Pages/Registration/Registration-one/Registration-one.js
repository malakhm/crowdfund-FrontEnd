

import { useLocation } from "react-router-dom";
import React, { useState, useEffect} from "react";

import './Registration-one.css';
import '../../Login/Login.js';
import Fund from "../../22.png";
import Buttony from "../../../Components/Button-yellow/Button.js";
import Dropdown from 'react-bootstrap/Dropdown';
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { BsCalendar2Date } from "react-icons/bs";
import { Link } from 'react-router-dom';

// const ButtonLink = ({ to, children }) => {
//   return (
//     <Link to={to}>
//       <Buttony type="submit" name="next">{children}</Buttony>
//     </Link>
//   );
// };


const RegistrationOne = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState(null);

  // Accessing data from link state object
  const location = useLocation();
  const userRole = location.state?.role;

  useEffect(() => {
    setRole(location.state?.role)
  }, []);



  
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.innerText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Do something with the form data
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Date of Birth:", dob);
    console.log("Gender:", gender);
    console.log("role:", userRole);

   
  };

  return (
        <div className="custom-container vh-100 w-100">
          <div className="Logo-img">
            <img src={Fund} alt="" className="reg-form-logo" />
          </div>
          <div className="headings-title">Registration</div>
    
          <form className="container mt-5 w-25 d-flex flex-column gap-3 container-custom-input-width" onSubmit={handleSubmit}>
            {/* First Name */}
            <div className="mb-3">
              <div className="input-group">
                <span className="input-group-text bg-transparent text-white">
                  <i className="bi bi-person"></i>
                </span>
                <input
                  type="text"
                  className="form-control bg-transparent custom-input-loginPage text-white"
                  id="formGroupExampleInput"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e)=> setFirstName(e.target.value)}
                />
              </div>
            </div>
    
            {/* Last Name */}
            <div className="mb-3">
              <div className="input-group">
                <span className="input-group-text bg-transparent text-white">
                  <i className="bi bi-person"></i>
                </span>
                <input
                  type="text"
                  className="form-control bg-transparent custom-input-loginPage text-white"
                  id="formGroupExampleInput2"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </div>
            </div>
    
            {/* Phone */}
            <div className="mb-3">
              <div className="input-group">
                <span className="input-group-text bg-transparent text-white">
                  <MdOutlinePhoneInTalk/>
                </span>
                <input
                  type="tel"
                  pattern="[0-9]{8}"
                  className="form-control bg-transparent custom-input-loginPage text-white"
                  id="formGroupExampleInput2"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>
            </div>
    
            {/* Email */}
            <div className="mb-3">
              <div className="input-group">
                <span className="input-group-text bg-transparent text-white">
                  <TfiEmail/>
                </span>
                <input
                  type="email"
                  className="form-control bg-transparent custom-input-loginPage text-white"
                  id="formGroupExampleInput2"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>
    
            {/* Date of Birth */}
            <div className="mb-3">
              <div className="input-group">
                <span className="input-group-text bg-transparent text-white">
                  <BsCalendar2Date />
                </span>
                <input
                  type="date"
                  className="form-control bg-transparent custom-input-loginPage text-white reg-form-date-input"
                  id="formGroupExampleInput2"
                  value={dob}
                  onChange={handleDobChange}
                />
    
              </div>
            </div>
    
            {/* Gender */}
            <Dropdown className="align-self-center">
              <Dropdown.Toggle variant="bg-transparent text-white" id="dropdown-basic">
                Gender
              </Dropdown.Toggle>
    
              <Dropdown.Menu>
                <Dropdown.Item href="#/Male" value="male" onClick={handleGenderChange}>Male</Dropdown.Item>
                <Dropdown.Item href="#/Female" value="female" onClick={handleGenderChange}>Female</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
    
            {/* Submit Button */}
            <div className="btn btn-warning d-flex justify-content-center align-self-center w-50">
              {/* <Buttony type="submit" name="next"><b>Next</b></Buttony> */}
  <Link to="/registration2" state={{ role: role, firstName:firstName, lastName:lastName, phone:phone, email:email, dob:dob,gender:gender}}>
             
          <Buttony type="submit" name="next"><b>Next</b></Buttony>
        </Link>
            </div>
    
            {/* Login Link */}
            <h6 className="custom-h6-input-login text-white d-flex justify-content-center">
              Have an Account?
              <a className="custom-anchor-tag-login" href={"/user/login"}>
                Login
              </a>
            </h6>
          </form>
        </div>
      );
    };
    
    export default RegistrationOne;