import React from 'react';
import CommentsContainer from '../../containers/CommentsContainer';

const Discussion = (props) => {
  const discussion = props.discussions.filter(discussion => discussion.id == props.match.params.id)[0];

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
