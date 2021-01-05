import React from 'react';

const Discussion = (props) => {
  const discussion = props.discussions[props.match.params.id - 1];

  return (
    <div>
      <li>
        {discussion ? discussion.topic : null}
      </li>
    </div>
  );
};

export default Discussion;
