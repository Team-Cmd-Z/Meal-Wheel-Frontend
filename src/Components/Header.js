import React from 'react';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar bg='light' variant='light'>
          <Container>
            <Navbar.Brand href='#home'>LOGO</Navbar.Brand>
            <Nav>
              <Link to="/">Home</Link>
              <Link to="/AboutUs">About Us</Link>
              <Link to="/Faq">FAQ</Link>
              <Link to="/SavedRecipes">Saved Recipes</Link>
            </Nav>
            <Button id='login-button'>Login</Button>
          </Container>
        </Navbar>
        <header id="head-img">
          <h4>The Meal Wheel™</h4>
          <p>Don't know what to cook for dinner? Bored of the same old recipes? Let Meal-Wheel™ take those concerns off your plate!</p>
        </header>
      </>
    );
  }
}

export default Header;
