import React from 'react';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Header.css';

class Header extends React.Component{
  render(){
    return(
      <>
        <Navbar bg='light' variant='light'>
          <Container>
            <Navbar.Brand href='#home'>LOGO</Navbar.Brand>
            <Nav>
              <Nav.Link href='#home' id='navbar-link' >Home</Nav.Link>
              <Nav.Link href='#AboutUs' id='navbar-link'>About Us</Nav.Link>
              <Nav.Link href='#FAQ' id='navbar-link'>FAQ</Nav.Link>
              <Nav.Link href='SavedRecipes' id='recipe-page'>Your Recipes</Nav.Link>
            </Nav>
            <Button id='login-button'>Login</Button>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Header;
