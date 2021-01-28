import React from 'react';
import { Link } from 'react-router-dom';
import { datePosted } from '../FormatCreatedAt';
import style from '../../style/discussions/Discussions.module.css';
import LikeButton from './LikeButton';

const Discussions = (props) => {

  return (
    <div className={style.container}>
      <h2>Discussion Topics</h2>
      <div className={style.containerBody}>

        {props.discussions.map((discussion) =>
          <div key={discussion.id} className={style.bodyContent}>
            <div className={style.containerDate}>
              {datePosted(discussion.created_at)}
            </div>
            <div>
              <Link to={`/discussions/${discussion.id}`}>{discussion.topic}</Link>
            </div>
            <div className={style.containerComments}>
              {discussion.comments.length} Comment(s)
              <LikeButton />
            </div>
          </div>
        )}

      </div>
    </div >
  );
};

export default Discussions;
