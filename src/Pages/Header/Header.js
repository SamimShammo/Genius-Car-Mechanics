import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import logo from '../../images/icon/achievement.png'
import useAuth from '../../useAuth/useAuth';
import './Header.css'

const Header = () => {
   const {user, logout, error} = useAuth();

    return (
        <>
      
 <Navbar bg="light"  collapseOnSelect expand="lg" sticky="top">
  <Container>
    <Navbar.Brand href="#home">
      <img src={logo} alt="" />
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
     
        <Nav.Link className=" nav-logo" as={HashLink} to="/home#home">Home</Nav.Link>
        <Nav.Link className=" nav-logo" as={HashLink} to="/services#services">Services</Nav.Link>
        <Nav.Link className=" nav-logo" as={HashLink} to="/experts#experts">Experts</Nav.Link>
        <Nav.Link className=" nav-logo" as={HashLink} to="/experts#experts">Features</Nav.Link>
        
       {
         user?.email ? <button  className=" nav-logo" onClick={logout}>Logout</button> :
         <Nav.Link className=" nav-logo" as={HashLink} to="/login#login">login</Nav.Link>
       }
     
     
      
     
      <Navbar.Text>
        Signed in as:<p>{user?.email}</p> 
      </Navbar.Text>
    </Navbar.Collapse>
  
    
   
  
  </Container>
</Navbar>
      </>
    );
};

export default Header;