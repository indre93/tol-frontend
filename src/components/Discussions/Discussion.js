import React from 'react';
import { Redirect } from 'react-router-dom';
import CommentsContainer from '../../containers/CommentsContainer';
import style from './Discussion.module.css';
import Card from 'react-bootstrap/Card';

const Discussion = (props) => {
    const discussion = props.discussions[props.match.params.id - 1];

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
