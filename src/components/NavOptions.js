import React from 'react';
import './NavOptions.css';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

const NavOptions = () => {
    return (
        <div className="navButtons">
            <Nav fill variant="pills" >
                <Nav.Item>
                    <NavLink to='/'>
                        <Button variant="outline-light" size="lg">Home</Button>
                    </NavLink>
                </Nav.Item>

                <Nav.Item>
                    <NavLink to='/discussions'>
                        <Button variant="outline-light" size="lg">All Discussions</Button>
                    </NavLink>
                </Nav.Item>

                <Nav.Item>
                    <NavLink to='/discussions/new'>
                        <Button variant="outline-light" size="lg">Start Discussion</Button>
                    </NavLink>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default NavOptions;
