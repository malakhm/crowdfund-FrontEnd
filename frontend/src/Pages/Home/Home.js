
import React from 'react'
import Fund from "../22.png";
import Buttony from '../../Components/Button-yellow/Button';
import Buttonb from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../Home/Home.css'
const Home = () => {
 
  return (
    <div className='Home-big-container'>
        <div className="custom-container vh-100 w-100">
        <div className="Logo-img">
            <img src={Fund} alt="" className="reg-form-logo " />
        </div>
        
        <div className="are-u-title"><b>Are You A?</b></div>
        <div className='container-for-buttons d-flex justify-content-space-evenly'>
        <Link to="/registration1" state={{ role: 'isCreator',data:'hello' }} className="link"><button className='home-buttons' type="submit" >Project Creator</button></Link>
        <Link to="/registration1" state={{ role: 'isDonor' }} className="link">  <button className='home-buttons' type="submit" >Donor</button></Link>

        </div>
     <h6 className="custom-h6-input-login text-white d-flex justify-content-center">Already Have an Account?<a className="custom-anchor-tag-login" href={'/user/login'}>Sign In</a></h6>

      </div>
     </div>
  
     
  )
}

export default Home

