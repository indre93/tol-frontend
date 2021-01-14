import React from 'react';
import { Redirect } from 'react-router-dom';
import CommentsContainer from '../../containers/CommentsContainer';
import style from './Discussion.module.css';

const Discussion = (props) => {
    const discussion = props.discussions[props.match.params.id - 1];

    return (
        <div className={style.container}>
            <div className={style.containerBody}>
                <h4>{discussion ? discussion.topic : <Redirect to='/discussions' />}</h4>
                <CommentsContainer discussion={discussion} />
            </div>
        </div>
    );
};

export default Discussion;
