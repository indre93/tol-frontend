import React from 'react';
import CommentsContainer from '../containers/CommentsContainer';

const Discussion = (props) => {
  const discussion = props.discussions[props.match.params.id - 1];

  return (
    <div>
      <h2>
        {discussion ? discussion.topic : null}
      </h2>
      <CommentsContainer discussion={discussion} />
    </div>
  );
};

export default Discussion;
