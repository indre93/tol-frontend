import React from 'react';
import './Main.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import NavOptions from './NavOptions';

const Main = () => {
  return (
    <div>
      <Jumbotron fluid>
        <div className="headerText">
          <h1>Welcome to TOL</h1>
          <p>A place where you can connect with others, share your thoughts, and discuss various topics</p>
        </div>
        <NavOptions />
      </Jumbotron>
    </div>
  );
};

export default Main;
