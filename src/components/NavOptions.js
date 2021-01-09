import React from 'react';
import './NavOptions.css';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const NavOptions = () => {
  return (
    <div>
      <nav className='navButtons'>
        <NavLink to='/'>
          <Button variant="outline-light" size="lg">Home</Button>
        </NavLink>
        <NavLink to='/discussions/new'>
          <Button variant="outline-light" size="lg">Start Discussion</Button>
        </NavLink>
        <NavLink to='/discussions'>
          <Button variant="outline-light" size="lg">All Discussions</Button>
        </NavLink>
      </nav>
    </div>
  );
};

export default NavOptions;
