import React from 'react';
import '../style/NavOptions.css';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavOptions = () => {
  return (
    <Navbar expand="lg" variant="dark">
      <Navbar.Brand>
        <NavLink to="/">TOL</NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <NavLink to="/discussions">All Discussions</NavLink>
          <NavLink to="/discussions/new">Start New Discussion</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavOptions;
