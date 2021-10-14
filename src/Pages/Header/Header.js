import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import logo from '../../images/icon/achievement.png'

const Header = () => {
    return (
        <>
      
      
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            React Bootstrap
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;