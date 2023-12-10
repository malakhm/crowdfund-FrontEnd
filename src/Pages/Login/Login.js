import React from "react";
import "./Login.css";
import Fund from "../22.png";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Buttony from '../../Components/Button-yellow/Button.js'
import Button from 'react-bootstrap/Button'
import { useState, useEffect, useContext } from "react";
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify';
import axios from "axios";
import {AuthContext} from '../../Context/AuthContext.js'
const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  
  const { fetchUserData , SetToken, setUser, user } = useContext(AuthContext);
  
  const navigate = useNavigate()


  const handleSubmit = async(e)=>{
    e.preventDefault();
    setLoading(true);
    if (!username || !password) {
      console.log("ENTER EMAIL OR PASSWORD")
      toast.error("Please insret email or password")
      setLoading(false);
      return;
  }
    try{
      console.log('fetching...')
      const response = await axios.post('http://localhost:8100/api/auth/signin',
    {
     username,
     password
    }
    
  );
  
  console.log(response.data.status)
  if(!response){alert("Wrong username or password !")}
  console.log(response.data.accessToken)
  const token = response.data.accessToken
  SetToken(token)
    await new Promise((resolve)=>{
      localStorage.setItem('token', token);
      resolve();
    })
    await fetchUserData()

    navigate('/')
    setUser(response.data)
    console.log(response.data)
    toast.success("Successful Login !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
  catch(err){
    if(err.response && err.response.status===401){
      toast.error("Unauthorized !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if(err.response && err.response.status===406){
      toast.error("Waiting for Admin Confirmation !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }
}
 return (
   <div className="login-container custom-container vh-100 w-100">
     <div className="Logo-img">
       <img src={Fund} alt="" className="reg-form-logo "/>
     </div>
     <div className="headings-title">Login</div>
     <form className="login-container container mt-5 w-25 d-flex flex-column gap-3 container-custom-input-width">
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
           onChange={(e)=>setUsername(e.target.value)}
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
           onChange={(e)=>setPassword(e.target.value)}
         />
       </div>
     </div>
     <div className="btn btn-warning d-flex justify-content-center align-self-center w-50">
     <Button variant="bg-warning" onClick={handleSubmit}><b>Login Now</b></Button>
     </div>
     <h6 className="custom-h6-input-login text-white d-flex justify-content-center">Don't Have an Account?<a className="custom-anchor-tag-login" href={'/home'}>Sign up</a></h6>
     </form>
   </div>
 );
};

export default Login;