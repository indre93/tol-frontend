import React from 'react';
import { datePosted } from '../FormatCreatedAt';
import style from './Comments.module.css';
import Card from 'react-bootstrap/Card';

const Comments = (props) => {
    return (
        <div className={style.comments}>
            {props.comments && props.comments.map(comment =>
                <div key={comment.id} className={style.CommentContainer}>
                    <Card.Header className={style.cardHeader}>
                        <strong className={style.username}>{comment.username}</strong>
                        <small className={style.postedTime}>{datePosted(comment.created_at)}</small>
                    </Card.Header>
                    <Card.Text className={style.cardBody}>{comment.content}</Card.Text>
                </div>
            )}
        </div>
    );
};

export default Comments;
