import React from 'react';

const Comments = (props) => {

  return (
    <div>
      <h3>Comments: </h3>
      {props.comments && props.comments.map(comment =>
        <li key={comment.id}>
          {comment.content} - By {comment.username}
        </li>
      )}
    </div>
  );
};

export default Comments;
