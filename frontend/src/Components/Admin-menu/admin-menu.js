
import React from 'react';

import {

  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';



const AdminMenu = () =>{
  return (
    <div>
      <CDBSidebarMenu >
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon='users' className='menu-list-item-color'>Donors</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user-friends" className='menu-list-item-color'>Creators</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="file-alt" className='menu-list-item-color'>Campaigns</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="comment" className='menu-list-item-color'>Messages</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="tasks" className='menu-list-item-color'>Registrations<br></br> Requests</CDBSidebarMenuItem>
            </NavLink>
            
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="clipboard-list" className='menu-list-item-color'>Post Requests</CDBSidebarMenuItem>
            </NavLink>
            
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="credit-card" className='menu-list-item-color'>Transactions</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="paper-plane" className='menu-list-item-color'>Announcements</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="sign-out-alt" className='menu-list-item-color'>Logout</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
    </div>
  )
}

export default AdminMenu
