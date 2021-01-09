import React from 'react';
import './Main.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import NavOptions from './NavOptions';

const Main = () => {
  return (
    <div>
      <Jumbotron fluid>
        <div className="mainText">
          <h1>Welcome to TOL</h1>
          <p>A place where you can share your thoughts, connect with others, and discuss various topics</p>
        </div>
      </Jumbotron>

      <NavOptions />
    </div>
  );
};

export default Main;
