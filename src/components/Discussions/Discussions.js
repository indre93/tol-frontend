import React from 'react';
import { Link } from 'react-router-dom';
import { datePosted } from '../FormatCreatedAt';
import style from './Discussions.module.css';
import Card from 'react-bootstrap/Card';

const Discussions = (props) => {
    return (
        <div className={style.DiscussionsContainer}>
            <h2>Discussions</h2>
            {props.discussions.map(discussion =>
                <Card key={discussion.id} className={`mb-2 ${style.card}`}>
                    <Card.Body>
                        <Card.Header as="h6" className={`mb-2 ${style.textMuted}`}>
                            {datePosted(discussion.created_at)}
                        </Card.Header>
                        <Card.Title>
                            <Link to={`/discussions/${discussion.id}`}>{discussion.topic}</Link>
                        </Card.Title>
                        <Card.Subtitle className={`mb-2 ${style.textMuted}`}>
                            {discussion.comments.length} Comment(s)
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default Discussions;
