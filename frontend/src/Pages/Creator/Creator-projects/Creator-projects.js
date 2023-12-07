import React from 'react'
import Cards from '../../../Components/Campaign-card/Campaign-card.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import  { useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';
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
        <Cards/>
        <div className='creator-main-card-controls d-flex justify-self-center justify-content-around t-100'>
            <p className='creator-main-card-edit text-warning d-flex '>Edit</p>
            <p className='creator-main-card-delete text-danger d-flex'>Delete</p>
        </div>
        
      </div>
 
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>

    {/* <ul className='Pagination-Feed'>1.2.3.4</ul> */}
    </div>

    </>
  )
}

export default CreatorProjects
