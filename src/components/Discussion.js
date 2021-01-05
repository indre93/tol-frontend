import React from 'react';

const Discussion = (props) => {
  return (
    <div>
      <li>
        {props.discussion.topic}
      </li>
    </div>
  );
};

export default Discussion;
