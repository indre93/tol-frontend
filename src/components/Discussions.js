import React from 'react';

const Discussions = (props) => {
  return (
    <div>
      <h1>Discussions</h1>
      {props.discussions.map(discussion => {
        return (
          <li key={discussion.id}>{discussion.topic}</li>
        );
      })}
    </div>
  );
};

export default Discussions;
