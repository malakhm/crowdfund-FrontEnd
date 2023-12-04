
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

const Sidebar = ( { children }) => {
  return (
    <div>
    <div className='' style={{ display: 'flex',width: '280px',height: '100', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
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
    </div>
  );
};

export default Sidebar;