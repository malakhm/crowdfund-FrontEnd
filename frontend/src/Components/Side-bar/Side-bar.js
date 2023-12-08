
import React from 'react';
import Logo from  '../../Assets/logo2.png'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import '../Side-bar/Side-bar.css';
const Sidebar = ( { children }) => {
  return (
<<<<<<< HEAD
    <div className='' style={{ display: 'flex',width: '280px',height: 'auto', overflow: 'scroll initial'}}>
=======
    <div className='sidebar-component-main' style={{ display: 'flex',width: '280px',height: '100vh', overflow: 'scroll initial' , position:'fixed'}}>
>>>>>>> new-malak-hamwi
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i> }>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            <img src={Logo} className='img-fluid   bg-transparent'/>
          </a>
        </CDBSidebarHeader>
        { children }
        <CDBSidebarContent className="sidebar-content">
          
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;