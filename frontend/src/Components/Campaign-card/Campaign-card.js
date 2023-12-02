import React from 'react'

import './Campaign-card.css'
import Help from '../../Assets/help.webp'
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import ProgressBar from 'react-bootstrap/ProgressBar';

const  Cards = () => {
    const now = 70
  return (

        <div className="Campaign-Card-Component">
      <img variant="top" src={Help} />
      <div className='Capmaign-Card-label'>
        <p className='start-card-label'>start date :<b>2 March 2023</b></p><p className='start-card-label'>end date :<b>3 March 2023</b></p>
      </div>    
      <div className='Campaign-Card-Basic-Info'> 
      <div className='Campaign-Card-project-title-with-icon'>
        <h3>Urgent Help</h3> 
        <IoBookmark/>
               
      </div>
      <div className='Campaign-Card-Credits'><p>By</p><h4>USAID</h4></div>
      <div className='Campaign-Card-Descripton'>
        <p className='Campaign-p-description'>jbwqdcsbqkjwckjdbcvjqb kadcn wqjcb kiavbkeqjb</p>
        <ProgressBar animated now={70} label={`${now}%`} variant='warning text-dark'/>
        <div className='Campaign-Card-stats'><p>$4000 raised of</p><h6>$9000</h6></div>
      </div>

      

    

      </div> 
      </div>

  )
}

export default Cards
