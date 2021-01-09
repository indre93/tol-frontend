import React from 'react';
import { Link } from 'react-router-dom';

const Discussions = (props) => {
  return (
    <div>
      <h1>Discussions</h1>
      {props.discussions.map(discussion =>
        <li key={discussion.id}>
          <Link to={`/discussions/${discussion.id}`}>
            {discussion.topic}
          </Link>
        </li>
      )}
    </div>
  );
};

export default Discussions;