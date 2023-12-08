import React from 'react'
import Cards from '../../../Components/Campaign-card/Campaign-card.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import Button from 'react-bootstrap/Button';
import { BsCheckCircleFill } from "react-icons/bs";
import campaign_req_icon from '../Admin-assets/add-post.png'
import { FaDeleteLeft } from "react-icons/fa6";
import SideBar from '../../../Components/Side-bar/Side-bar.js'
import AdminMenu from '../../../Components/Admin-menu/admin-menu'
const  AdminRequests = () => {


  return (
    <>
    <SideBar><AdminMenu/></SideBar>

    <div className='campaign-main-admin container d-flex flex-column'>
    <h1 className="donors-page-heading ">
        <img
          className="campaign-icon-in-donors-page"
          src={campaign_req_icon}
          alt="campaign icon"
        />
        <p className="donors-page-heading-spacer"></p>
        <p className="donors-page-word">Campaign Requests</p>
      </h1>

      <div className='campaign-main-Container container d-flex '>

        <div className='Creator-main-Card '>
          <div className='creator-main-card-controls d-flex justify-self-center '>

           <p className='creator-main-card-edit text-success d-flex '><BsCheckCircleFill className='document-icon' /></p>

        
           <p className='creator-main-card-delete text-danger d-flex'><FaDeleteLeft className='document-icon' /></p>
           
          </div>
          <Cards />
        </div>

        <div className='Creator-main-Card '>
          <div className='creator-main-card-controls d-flex justify-self-center '>

           <p className='creator-main-card-edit text-success d-flex '><BsCheckCircleFill className='document-icon' /></p>

        
           <p className='creator-main-card-delete text-danger d-flex'><FaDeleteLeft className='document-icon' /></p>
           
          </div>
          <Cards />
        </div>

        <div className='Creator-main-Card '>
          <div className='creator-main-card-controls d-flex justify-self-center '>

           <p className='creator-main-card-edit text-success d-flex '><BsCheckCircleFill className='document-icon' /></p>

        
           <p className='creator-main-card-delete text-danger d-flex'><FaDeleteLeft className='document-icon' /></p>
           
          </div>
          <Cards />
        </div>

        <div className='Creator-main-Card '>
          <div className='creator-main-card-controls d-flex justify-self-center '>

           <p className='creator-main-card-edit text-success d-flex '><BsCheckCircleFill className='document-icon' /></p>

        
           <p className='creator-main-card-delete text-danger d-flex'><FaDeleteLeft className='document-icon' /></p>
           
          </div>
          <Cards />
        </div>

        <div className='Creator-main-Card '>
          <div className='creator-main-card-controls d-flex justify-self-center '>

           <p className='creator-main-card-edit text-success d-flex '><BsCheckCircleFill className='document-icon' /></p>

        
           <p className='creator-main-card-delete text-danger d-flex'><FaDeleteLeft className='document-icon' /></p>
           
          </div>
          <Cards />
        </div>

        <div className='Creator-main-Card '>
          <div className='creator-main-card-controls d-flex justify-self-center '>

           <p className='creator-main-card-edit text-success d-flex '><BsCheckCircleFill className='document-icon' /></p>

        
           <p className='creator-main-card-delete text-danger d-flex'><FaDeleteLeft className='document-icon' /></p>
           
          </div>
          <Cards />
        </div>

        <div className='Creator-main-Card '>
          <div className='creator-main-card-controls d-flex justify-self-center '>

           <p className='creator-main-card-edit text-success d-flex '><BsCheckCircleFill className='document-icon' /></p>

        
           <p className='creator-main-card-delete text-danger d-flex'><FaDeleteLeft className='document-icon' /></p>
           
          </div>
          <Cards />
        </div>
</div>
    </div>
    </>


  )
}

export default AdminRequests
