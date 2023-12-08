
import React from 'react';

import {

  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink , useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify'

const CreatorMenu = () =>{
  const navigate = useNavigate()
  const handleLogout= (e)=>{
    e.preventDefault()
    localStorage.clear();
    navigate('/user/login')
    toast.success('Logged out successfully !')
   
   
  }
  return (
    <div>
     <CDBSidebarMenu >
            <NavLink exact to="/feed" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon='seedling' className='menu-list-item-color'>Feed</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/creator/projects" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon='file-alt' className='menu-list-item-color'>My Projects</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user" className='menu-list-item-color'>Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/notifications" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="bell" className='menu-list-item-color'>Notifications</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/transactions" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="credit-card" className='menu-list-item-color'>Transactions</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="question-circle" className='menu-list-item-color'>Support</CDBSidebarMenuItem>
            </NavLink>
            
            <NavLink exact to="/user/login" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="sign-out-alt" className='menu-list-item-color' onClick={handleLogout}>Logout</CDBSidebarMenuItem>
            </NavLink>
            
          </CDBSidebarMenu>
    </div>
  )
}

export default CreatorMenu
