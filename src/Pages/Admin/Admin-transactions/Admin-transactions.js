import React from 'react'
import Notification from '../../../Components/Notification/Notification.js'
import SideBar from '../../../Components/Side-bar/Side-bar.js'
import AdminMenu from '../../../Components/Admin-menu/admin-menu'
const AdminTransactions = () => {
  return (
    <>
    <SideBar><AdminMenu/></SideBar>

    <div className='Notifications-main-container-div container d-flex justify-self-center flex-column'>
      <Notification >Kamal</Notification>
      <Notification >Kamal</Notification>
      <Notification >Kamal</Notification>
      <Notification >Kamal</Notification>
      <Notification >Kamal</Notification>
      <Notification >Kamal</Notification>
      <Notification >Kamal</Notification>
      <Notification >Kamal</Notification>
      <Notification >Kamal</Notification>



    </div>
    </>
  )
}

export default AdminTransactions
