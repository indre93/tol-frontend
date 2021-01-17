import React from 'react';
import CommentsContainer from '../../containers/CommentsContainer';
import style from '../../style/discussions/Discussion.module.css';

const Discussion = (props) => {
  const discussion = props.discussions[props.match.params.id - 1];

  return (
    <div className={style.container}>
      <div className={style.containerBody}>
        <h4>{discussion ? discussion.topic : null}</h4>
        <CommentsContainer discussion={discussion} />
      </div>
    </div>
  );
};

export default Discussion;
