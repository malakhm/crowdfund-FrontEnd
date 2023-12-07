import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import './Admin-announcements.css'
function AdminAnnouncements() {
  return (
    <div className='Announcements-main-container container d-flex justify-content-center '>
      <form className='d-flex container '>
        <input type="text" />
        <Button variant="warning" >Send</Button>
      </form>
    </div>
  )
}

export default AdminAnnouncements
