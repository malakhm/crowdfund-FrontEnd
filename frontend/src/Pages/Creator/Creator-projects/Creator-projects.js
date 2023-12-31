import React from 'react'
import Cards from '../../../Components/Campaign-card/Campaign-card.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import  { useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import Button from 'react-bootstrap/Button';
import { MdEditDocument } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";
import './Creator-projects.css'
import '../../Feed/Feed.css'
const CreatorProjects = () => {
    const [page, setPage] = useState(1)
  return (
    <>
    

        {/* <PaginationControl
        page={page}
        between={2}
        total={20}
        limit={3}
        changePage={(page) => {
            setPage(page)
        }}
        ellipsis={1}
        /> */}
    <div className='Feed-main-Container container d-flex '>
    
      <div className='Creator-main-Card '>
        <div className='creator-main-card-controls d-flex justify-self-center '>
            <p className='creator-main-card-edit text-warning d-flex '><MdEditDocument className='document-icon'/></p>
            <p className='creator-main-card-delete text-danger d-flex'><FaDeleteLeft className='document-icon'/></p>
        </div>
        <Cards/>
      </div>


      <div className='Creator-main-Card '>
        <div className='creator-main-card-controls d-flex justify-self-center '>
            <p className='creator-main-card-edit text-warning d-flex '><MdEditDocument className='document-icon'/></p>
            <p className='creator-main-card-delete text-danger d-flex'><FaDeleteLeft className='document-icon'/></p>
        </div>
        <Cards/>
      </div>

      <div className='Creator-main-Card '>
        <div className='creator-main-card-controls d-flex justify-self-center '>
            <p className='creator-main-card-edit text-warning d-flex '><MdEditDocument className='document-icon'/></p>
            <p className='creator-main-card-delete text-danger d-flex'><FaDeleteLeft className='document-icon'/></p>
        </div>
        <Cards/>
      </div>

      <div className='Creator-main-Card '>
        <div className='creator-main-card-controls d-flex justify-self-center '>
            <p className='creator-main-card-edit text-warning d-flex '><MdEditDocument className='document-icon'/></p>
            <p className='creator-main-card-delete text-danger d-flex'><FaDeleteLeft className='document-icon'/></p>
        </div>
        <Cards/>
      </div>

      <div className='Creator-main-Card '>
        <div className='creator-main-card-controls d-flex justify-self-center '>
            <p className='creator-main-card-edit text-warning d-flex '><MdEditDocument className='document-icon'/></p>
            <p className='creator-main-card-delete text-danger d-flex'><FaDeleteLeft className='document-icon'/></p>
        </div>
        <Cards/>
      </div>

      <div className='Creator-main-Card '>
        <div className='creator-main-card-controls d-flex justify-self-center '>
            <p className='creator-main-card-edit text-warning d-flex '><MdEditDocument className='document-icon'/></p>
            <p className='creator-main-card-delete text-danger d-flex'><FaDeleteLeft className='document-icon'/></p>
        </div>
        <Cards/>
      </div>
    {/* <ul className='Pagination-Feed'>1.2.3.4</ul> */}
    </div>
    </>
  )
}

export default CreatorProjects
