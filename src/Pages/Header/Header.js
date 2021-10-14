import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/icon/achievement.png'
import './Header.css'

const Header = () => {
    return (
        <>
      
 <Navbar bg="light" expand="lg" sticky="top">
  <Container>
    <Navbar.Brand href="#home">
      <img src={logo} alt="" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link className=" nav-logo" href="#home">Home</Nav.Link>
        <Nav.Link className=" nav-logo" href="#services">Services</Nav.Link>
        <Nav.Link className=" nav-logo" href="#experts">Experts</Nav.Link>
        <Nav.Link className=" nav-logo" href="#experts">Features</Nav.Link>
        
      </Nav>
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>
    <Navbar.Toggle />
    
   
  
  </Container>
</Navbar>
      </>
    );
};

export default Header;