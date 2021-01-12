import React from 'react';
import { Redirect } from 'react-router-dom';
import CommentsContainer from '../../containers/CommentsContainer';
import style from './Discussion.module.css';
import Card from 'react-bootstrap/Card';

const Discussion = (props) => {
    const discussion = props.discussions[props.match.params.id - 1];

    return (
        <div className={style.DiscussionContainer}>
            <Card className={style.card}>
                <Card.Header as="h4">
                    {discussion ? discussion.topic : <Redirect to='/discussions' />}
                </Card.Header >
                <CommentsContainer discussion={discussion} />
            </Card>
        </div>
    );
};

export default Discussion;
