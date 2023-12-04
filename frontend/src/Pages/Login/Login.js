import React from "react";
import "./Login.css";
import Fund from "../22.png";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Buttony from '../../Components/Button-yellow/Button.js'

const Login = () => {
 return (
   <div className="custom-container vh-100 w-100">
     <div className="Logo-img">
       <img src={Fund} alt="" className="reg-form-logo " />
     </div>
     <div className="headings-title">Login</div>
     <form className="container mt-5 w-25 d-flex flex-column gap-3 container-custom-input-width">
     <div className="mb-3">
       <div className="input-group">
         <span className="input-group-text bg-transparent text-white">
           <i className="bi bi-person"></i>
         </span>
         <input
           type="text"
           className="form-control bg-transparent custom-input-loginPage text-white"
           id="formGroupExampleInput"
           placeholder="Enter your username"
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
           id="formGroupExampleInput2"
           placeholder="Enter your password"
         />
       </div>
     </div>
     <div className="btn btn-warning d-flex justify-content-center align-self-center w-50">
     <Buttony><b>Login Now</b></Buttony>
     </div>
     <h6 className="custom-h6-input-login text-white d-flex justify-content-center">Don't Have an Account?<a className="custom-anchor-tag-login" href={'/'}>Sign up</a></h6>
     </form>
   </div>
 );
};

export default Login;