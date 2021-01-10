import React from 'react';
import { datePosted } from '../FormatCreatedAt';

const Comments = (props) => {
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
