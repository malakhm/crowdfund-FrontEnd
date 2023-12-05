
import React from 'react';
import './donor-menu.css'
import {

  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import  {SiBuzzfeed}  from "react-icons/si/index.esm.js";


const DonorMenu = () =>{
  return (
    <div>
      <CDBSidebarMenu >
            <NavLink exact to="/feed" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon='seedling' className='menu-list-item-color'>Feed</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user" className='menu-list-item-color'>Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/notifications" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="bell" className='menu-list-item-color'>Notifications</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/donor/transactions" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="credit-card" className='menu-list-item-color'>Transactions</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="question-circle" className='menu-list-item-color'>Support</CDBSidebarMenuItem>
            </NavLink>
            
            <NavLink exact to="/logout" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="sign-out-alt" className='menu-list-item-color'>Logout</CDBSidebarMenuItem>
            </NavLink>
            
          </CDBSidebarMenu>
    </div>
  )
}

export default DonorMenu
