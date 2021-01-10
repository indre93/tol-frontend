import React from 'react';
import './Main.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import NavOptions from './NavOptions';

const Main = () => {
    return (
        <Jumbotron fluid>
            <div className="headerText">
                <h1>TOL</h1>
                <p>A place where you can connect with others, share your thoughts, and discuss various topics</p>
            </div>
            <NavOptions />
        </Jumbotron>
    );
};

export default Main;
