import React, { useState } from 'react';
import "./Header.css";
import { FaListUl } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';



const Header = () => {
  

  return (
    <Container class="contain">
      <Navbar expand="lg" className="bg-body-tertiary">
        <div class="containHeader">
        <FaListUl/>
      <div class="containerHeader">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <p class="navbar-brand" href="#">   Dashboard 
    <SlArrowRight class="font-weight-bold"/>
        Feed</p>
  </nav>
</div>
        </div>
      </Navbar>
    </Container>

  );
};

export default Header;

