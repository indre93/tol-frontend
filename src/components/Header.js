import React from 'react';
import '../style/Header.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import NavOptions from './NavOptions';

const Header = () => {
  return (
    <Jumbotron fluid>
      <div className="headerText">
        <h1>TOL</h1>
        <p>a place where you can connect with others, share your thoughts, and discuss various topics</p>
      </div>
      <NavOptions />
    </Jumbotron>
  );
};

export default Header;
