import React from "react";
import './Registration-one.css';
import '../Login/Login.css'
import Fund from "../22.png";
import Buttony from "../../Components/Button-yellow/Button.js";
import Dropdown from 'react-bootstrap/Dropdown';
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { BsCalendar2Date } from "react-icons/bs";
const RegistrationOne = () => {
  return (
    <div className="custom-container h-100 w-100">
      <div className="Logo-img">
        <img src={Fund} alt="" className="reg-form-logo" />
      </div>
      <div className="headings-title">Registration</div>

      <form className="container mt-5 w-25 d-flex flex-column gap-3 container-custom-input-width ">
        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text bg-transparent text-white">
              <i className="bi bi-person"></i>
            </span>
            <input
              type="text"
              className="form-control bg-transparent custom-input-loginPage text-white "
              id="formGroupExampleInput"
              placeholder="Enter your first name"
            />
          </div>
        </div>
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
            />
          </div>
        </div>
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
            />
          </div>
        </div>
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
         />
       </div>
       
     </div>
     <div className="mb-3">
       <div className="input-group">
         <span className="input-group-text bg-transparent text-white">
         <BsCalendar2Date />
         </span>
         <input
           type="date"
           className="form-control bg-transparent custom-input-loginPage text-white reg-form-date-input"
           id="formGroupExampleInput2"
         />

       </div>
     </div>
            <Dropdown className="align-self-center">
                <Dropdown.Toggle variant="bg-transparent text-white" id="dropdown-basic">
                    Gender
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/Male">Male</Dropdown.Item>
                    <Dropdown.Item href="#/Female">Female</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
     
        <div className="btn btn-warning d-flex justify-content-center align-self-center w-50">
          <Buttony><b>Next</b></Buttony>
        </div>
        <h6 className="custom-h6-input-login text-white d-flex justify-content-center">
          Have an Account?
          <a className="custom-anchor-tag-login" href={"/"}>
            Login
          </a>
        </h6>
      </form>
    </div>
  );
};

export default RegistrationOne;
