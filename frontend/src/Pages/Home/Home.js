import React from 'react'
import Fund from "../22.png";
import Buttony from '../../Components/Button-yellow/Button';
import Button from 'react-bootstrap/Button'
import '../Home/Home.css'
const Home = () => {
  return (
    <div>
        <div className="custom-container vh-100 w-100">
     <div className="Logo-img">
       <img src={Fund} alt="" className="reg-form-logo " />
     </div>
     <div className="are-u-title"><b>Are You A?</b></div>
     <div className='container-for-buttons d-flex justify-content-space-evenly'>
     <button className='home-buttons' type="submit">Project Creator</button>
     <button className='home-buttons' type="submit">Donor</button>
     </div>
     </div>
     </div>
  
     
  )
}

export default Home