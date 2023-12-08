
import React, { useState} from "react";
import {  useLocation, useNavigate } from 'react-router-dom'; // Import useLocation
import Fund from "../../22.png";
import Buttony from "../../../Components/Button-yellow/Button.js";
import axios from 'axios';
import { toast } from "react-toastify";
const RegistrationTwo = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  
  // Fetching data passed from Registration-one
  const location = useLocation();
  const {
    role,
    firstName,
    lastName,
    phone,
    email,
    dob,
    gender
  } = location.state || {};
  let isDonor;
  let isCreator
  switch(role){
    case 'isDonor': isDonor = true; break;
    case 'isCreator': isCreator =true; break;
    default: isDonor = false; isCreator=false;break;
  }
  console.log('isCreator', isCreator)
  console.log('isDonor', isDonor)
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("handlesubmit")

    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    // Prepare user data
    const userData = {
      isDonor,
      isCreator,
      first_name:firstName,
      last_name:lastName,
      phone_number:phone,
      email,
      dob,
      gender,
      username,
      password
    };


    try {
      const response = await axios.post('http://localhost:8100/api/users/', userData);
      console.log("res ",response.data); 
      if(response.status === 200){
        navigate('/user/login', { replace: true });
      }
    } catch (error) {
      
      toast.error('username already exists!'); 
    }
  };

  return (
    <div className="custom-container vh-100 w-100">
      <div className="Logo-img">
        <img src={Fund} alt="" className="reg-form-logo" />
      </div>
      <div className="headings-title">Registration</div>
      <form
        className="container mt-5 w-25 d-flex flex-column gap-3 container-custom-input-width"
        onSubmit={(e)=>handleSubmit(e)}
      >
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text bg-transparent text-white">
              <i className="bi bi-lock"></i>
            </span>
            <input
              type="password"
              className="form-control bg-transparent custom-input-loginPage text-white"
              id="formGroupExampleInput"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-3">
          <div className="input-group">
            <span className="input-group-text bg-transparent text-white">
              <i className="bi bi-lock"></i>
            </span>
            <input
              type="password"
              className="form-control bg-transparent custom-input-loginPage text-white"
              id="formGroupExampleInput"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        

        <div className="btn btn-warning d-flex justify-content-center align-self-center w-50">
          {/* <Buttony type="submit">
            <b>Submit</b>
          </Buttony> */}
          <Buttony type="submit"><b>Submit</b></Buttony>
        </div>
      </form>
    </div>
  );
};

export default RegistrationTwo;




















