import React from 'react';
import { NavLink } from 'react-router-dom';
import DiscussionsContainer from '../containers/DiscussionsContainer';

const Home = () => {

  return (
    <div>
      <h1>Welcome to TOL</h1>
      <p>A place where you can share your thoughts, connect, and discuss various topics</p>

      <nav >
        <li>
          <NavLink to="/discussions/new">Start New Discussion</NavLink>
        </li>
        <li>
          <NavLink to="/discussions">See All Discussions</NavLink>
        </li>
      </nav>

      <hr />

      <DiscussionsContainer />
    </div>
  );
};

export default Home;
