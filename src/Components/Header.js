import React from 'react';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';

class Header extends React.Component{
  render(){
    return(
      <>
        <Navbar bg='light' variant='light'>
          <Container>
            <Navbar.Brand href='#home'>LOGO</Navbar.Brand>
            <Nav>
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>About Us</Nav.Link>
              <Nav.Link>FAQ</Nav.Link>
              <Nav.Link>Your Recipes</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Header;
