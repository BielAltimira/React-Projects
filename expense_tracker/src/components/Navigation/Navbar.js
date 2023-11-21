
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

import "./Navbar.css";


function Navbar_() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container  className='container'>
          <img src={require("./logo.png")} height="60" width="60" alt="logo"></img>
          <Navbar.Brand className='brand' as={Link} to="/">
            Expense Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/tracker">Tracker</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar_;