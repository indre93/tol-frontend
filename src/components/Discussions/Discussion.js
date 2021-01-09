import React from 'react';
import { Redirect } from 'react-router-dom';

import CommentsContainer from '../../containers/CommentsContainer';

const Discussion = (props) => {
  const discussion = props.discussions.filter(discussion => discussion.id == props.match.params.id)[0];

  return (
    <div>
      <h2>
        {discussion ? discussion.topic : <Redirect to='/discussions' />}
      </h2>
      <CommentsContainer discussion={discussion} />
    </div>
  );
};

export default Discussion;
