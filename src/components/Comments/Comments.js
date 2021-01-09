import React from 'react';

const Comments = (props) => {

  const datePosted = (created_date) => {
    const formatDate = new Date(`${created_date}`);
    const date = formatDate.toLocaleString();
    return date;
  };

  return (
    <div>
      <h3>Comments: </h3>
      {props.comments && props.comments.map(comment =>
        <li key={comment.id}>
          {comment.content} - By {comment.username} - Posted: {datePosted(comment.created_at)}
        </li>
      )}
    </div>
  );
};

export default Comments;
