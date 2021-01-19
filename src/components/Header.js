import React from 'react';
import '../style/Header.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import NavOptions from './NavOptions';

const Header = () => {
  return (
    <Jumbotron fluid>
      <NavOptions />
    </Jumbotron>
  );
};

export default Header;
