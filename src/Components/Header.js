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
            <img id="logo" src="images/logoicon.png" alt="logo"/>
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
        <header id="head-img">
          <h4>The Meal Wheel™</h4>
          <p>Don't know what to cook for dinner? Bored of the same old recipes? Let Meal-Wheel™ take those concerns off your plate.</p>
        </header>
      </>
    );
  }
}

export default withAuth0(Header);
