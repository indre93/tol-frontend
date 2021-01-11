import React from 'react';
import { Link } from 'react-router-dom';
import { datePosted } from '../FormatCreatedAt';
import style from './Discussions.module.css';
import Card from 'react-bootstrap/Card';

const Discussions = (props) => {
    return (
        <Card className={style.cardContainer}>
            <Card.Header>
                <h2>Discussion Topics</h2>
            </Card.Header>
            {props.discussions.map(discussion =>
                <div key={discussion.id} className={`mb-2 ${style.card}`}>
                    <Card.Body className={style.cardBody}>
                        <Card.Subtitle variant="top" className={`mb-2 ${style.textMuted}`}>
                            {datePosted(discussion.created_at)}
                        </Card.Subtitle>
                        <Card.Title>
                            <Link to={`/discussions/${discussion.id}`}>{discussion.topic}</Link>
                        </Card.Title>
                        <Card.Subtitle className={` ${style.textMuted}`}>
                            {discussion.comments.length} Comment(s)
                        </Card.Subtitle>
                    </Card.Body>
                </div>
            )}
        </Card>
    );
};

export default Discussions;
