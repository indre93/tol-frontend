import React from 'react';

const Discussion = (props) => {
  const discussion = props.discussions[props.match.params.id - 1];

  return (
    <div>
      <h2>
        {discussion ? discussion.topic : null}
      </h2>
    </div>
  );
};

export default Discussion;
