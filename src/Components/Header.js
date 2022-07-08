import React from 'react';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

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
            {
              this.props.auth0.isAuthenticated ? 
              <>
                <LogoutButton id='login-button' /> 
                <Profile />
              </>
              : <LoginButton id='login-button' />
            }
          </Container>
        </Navbar>
        <header>
          <h4>The Meal Wheel™</h4>
        </header>
      </>
    );
  }
}

export default withAuth0(Header);
