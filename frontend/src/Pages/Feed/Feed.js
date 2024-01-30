import React from "react";
import Cards from "../../Components/Campaign-card/Campaign-card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { PaginationControl } from "react-bootstrap-pagination-control";

import "./Feed.css";
const Feed = () => {
  const [page, setPage] = useState(1);
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
      <h1></h1>
    <Link to="/details"style={{ textDecoration: 'none' ,color:'#333333'}}> <Cards /></Link>
    <Link to="/details"style={{ textDecoration: 'none' ,color:'#333333'}}> <Cards /></Link>
    <Link to="/details"style={{ textDecoration: 'none' ,color:'#333333'}}> <Cards /></Link>
    <Link to="/details"style={{ textDecoration: 'none' ,color:'#333333'}}> <Cards /></Link>
    <Link to="/details"style={{ textDecoration: 'none' ,color:'#333333'}}> <Cards /></Link>
    <Link to="/details"style={{ textDecoration: 'none' ,color:'#333333'}}> <Cards /></Link>
      

    {/* <ul className='Pagination-Feed'>1.2.3.4</ul> */}
    </div>

    </>
  );
};

export default Feed;