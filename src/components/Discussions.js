import React from 'react';
import Discussion from './Discussion';

const Discussions = (props) => {
  return (
    <div>
      <h1>Discussions</h1>
      {props.discussions.map(discussion =>
        <div key={discussion.id}>
          <Discussion discussion={discussion} />
        </div>
      )}
    </div>
  );
};

export default Discussions;
