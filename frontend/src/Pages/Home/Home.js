import React from 'react'
import Fund from "../22.png";
import Buttony from '../../Components/Button-yellow/Button';
import Buttonb from 'react-bootstrap/Button'

import '../Home/Home.css'
const Home = () => {
  return (
    <div className='home-big-container'>
        <div className="home-custom-container vh-100 w-100">
        <div className="Logo-img">
            <img src={Fund} alt="" className="reg-form-logo " />
        </div>
        <div className="are-u-title"><b>Are You A?</b></div>
        <div className='container-for-buttons d-flex justify-content-space-evenly'>
            <button className='home-buttons effect effect-4' type="submit">Project Creator</button>
            <button className='home-buttons' type="submit">Donor</button>
        </div>
      </div>
     </div>
  
     
  )
}

export default Home