import React from 'react'
import './Details-card.css'
import Help from '../../Assets/help.webp'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { BiSolidDonateHeart } from "react-icons/bi";
import Buttony from '../Button-yellow/Button';
const DetailsCard = () => {
    const now = 70
  return (
    <div className='Details-Card-Main-Container container d-flex justify-self-center'>
        <div className='Details-Card-left-side'>
            <h1>Urgent Help</h1>
            <img src={Help}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className='Details-Card-right-side'>
            <div className='Details-Card-Credits'><p>By</p><h4>USAID</h4></div>
            <p className='details-card-p days-left'>59 Days left</p>
        <div className='Details-Card-stats'><p className='details-card-p'>$4000 raised of</p><h6>$9000</h6></div>
        <ProgressBar animated now={70} label={`${now}%`} variant='warning text-dark '/>
        <div className='Details-Card-Donate'>
            <BiSolidDonateHeart  className='Donate-icon'/>
            <p>1000 People Donated</p>
        </div>
        <Buttony>Donate Now!</Buttony>

        </div>
    </div>
  )
}

export default DetailsCard
