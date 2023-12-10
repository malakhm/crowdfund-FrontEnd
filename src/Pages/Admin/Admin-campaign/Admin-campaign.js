import React from 'react'
import Cards from '../../../Components/Campaign-card/Campaign-card.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin-campaign.css'
import { useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import Button from 'react-bootstrap/Button';
import { FaDeleteLeft } from "react-icons/fa6";
import campaign_icon from '../Admin-assets/campaign.png'
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import SideBar from '../../../Components/Side-bar/Side-bar.js'
import AdminMenu from '../../../Components/Admin-menu/admin-menu'
const AdminCampaign = () => {
  const [Hidden, SetHidden] = useState(false);
  const handlHideClick = ()=>{
    // console.log("hidden clicked !")
    SetHidden(false)
;
  }

  const handlVisibleClick = ()=>{
    // console.log("visible clicked !")

    SetHidden(true)
;
  }
  return (
    <>
    <SideBar><AdminMenu/></SideBar>
    <div className='campaign-main-admin container d-flex flex-column'>
    <h1 className="donors-page-heading ">
        <img
          className="campaign-icon-in-donors-page"
          src={campaign_icon}
          alt="campaign icon"
        />
        <p className="donors-page-heading-spacer"></p>
        <p className="donors-page-word">Campaigns</p>
      </h1>

      <div className='campaign-main-Container container d-flex '>

        <div className='Creator-main-Card '>
          <div className='creator-main-card-controls d-flex justify-self-center '>
          {Hidden?
           <p className='creator-main-card-edit text-warning d-flex '><FaRegEyeSlash className='document-icon' onClick={()=>handlHideClick()}/></p>
           :
           <p className='creator-main-card-edit text-warning d-flex'><FaRegEye className='document-icon' onClick={()=>handlVisibleClick()}/></p>
        }
           <p className='creator-main-card-delete text-danger d-flex'><FaDeleteLeft className='document-icon' /></p>
           
          </div>
          <Cards />
        </div>

        <div className='Creator-main-Card '>
          <div className='creator-main-card-controls d-flex justify-self-center '>
          {Hidden?
           <p className='creator-main-card-edit text-warning d-flex '><FaRegEyeSlash className='document-icon' onClick={()=>handlHideClick()}/></p>
           :
           <p className='creator-main-card-edit text-warning d-flex'><FaRegEye className='document-icon' onClick={()=>handlVisibleClick()}/></p>
        }
           <p className='creator-main-card-delete text-danger d-flex'><FaDeleteLeft className='document-icon' /></p>
           
          </div>
          <Cards />
        </div>

        <div className='Creator-main-Card '>
          <div className='creator-main-card-controls d-flex justify-self-center '>
          {Hidden?
           <p className='creator-main-card-edit text-warning d-flex '><FaRegEyeSlash className='document-icon' onClick={()=>handlHideClick()}/></p>
           :
           <p className='creator-main-card-edit text-warning d-flex'><FaRegEye className='document-icon' onClick={()=>handlVisibleClick()}/></p>
        }
           <p className='creator-main-card-delete text-danger d-flex'><FaDeleteLeft className='document-icon' /></p>
           
          </div>
          <Cards />
        </div>

        <div className='Creator-main-Card '>
          <div className='creator-main-card-controls d-flex justify-self-center '>
          {Hidden?
           <p className='creator-main-card-edit text-warning d-flex '><FaRegEyeSlash className='document-icon' onClick={()=>handlHideClick()}/></p>
           :
           <p className='creator-main-card-edit text-warning d-flex'><FaRegEye className='document-icon' onClick={()=>handlVisibleClick()}/></p>
        }
           <p className='creator-main-card-delete text-danger d-flex'><FaDeleteLeft className='document-icon' /></p>
           
          </div>
          <Cards />
        </div>

        <div className='Creator-main-Card '>
          <div className='creator-main-card-controls d-flex justify-self-center '>
          {Hidden?
           <p className='creator-main-card-edit text-warning d-flex '><FaRegEyeSlash className='document-icon' onClick={()=>handlHideClick()}/></p>
           :
           <p className='creator-main-card-edit text-warning d-flex'><FaRegEye className='document-icon' onClick={()=>handlVisibleClick()}/></p>
        }
           <p className='creator-main-card-delete text-danger d-flex'><FaDeleteLeft className='document-icon' /></p>
           
          </div>
          <Cards />
        </div>

        <div className='Creator-main-Card '>
          <div className='creator-main-card-controls d-flex justify-self-center '>
          {Hidden?
           <p className='creator-main-card-edit text-warning d-flex '><FaRegEyeSlash className='document-icon' onClick={()=>handlHideClick()}/></p>
           :
           <p className='creator-main-card-edit text-warning d-flex'><FaRegEye className='document-icon' onClick={()=>handlVisibleClick()}/></p>
        }
           <p className='creator-main-card-delete text-danger d-flex'><FaDeleteLeft className='document-icon' /></p>
           
          </div>
          <Cards />
        </div>
</div>
    </div>
    </>


  )
}

export default AdminCampaign
