
import React from 'react';

import {

  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';


const AdminMenu = () =>{
 
 const handleLogout= (e)=>{
  e.preventDefault()
  localStorage.clear();
  toast.success('Logged out successfully !')
}
  return (
    <div>
      <CDBSidebarMenu >
            <NavLink exact to="/admin/donors" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon='users' className='menu-list-item-color'>Donors</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/creators" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user-friends" className='menu-list-item-color'>Creators</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/campaigns" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="file-alt" className='menu-list-item-color'>Campaigns</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/messages" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="comment" className='menu-list-item-color'>Messages</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/admin/reg/requests" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="tasks" className='menu-list-item-color'>Registrations<br></br> Requests</CDBSidebarMenuItem>
            </NavLink>
            
            <NavLink exact to="/admin/post/requests" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="clipboard-list" className='menu-list-item-color'>Post Requests</CDBSidebarMenuItem>
            </NavLink>
            
            <NavLink exact to="/admin/transactions" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="credit-card" className='menu-list-item-color'>Transactions</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/admin/anouncements" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="paper-plane" className='menu-list-item-color'>Announcements</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to = "/admin/login" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="sign-out-alt" className='menu-list-item-color' onClick={handleLogout}>Logout</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
    </div>
  )
}

export default AdminMenu
