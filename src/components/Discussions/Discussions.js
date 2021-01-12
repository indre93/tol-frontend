import React from 'react';
import { Link } from 'react-router-dom';
import { datePosted } from '../FormatCreatedAt';
import style from './Discussions.module.css';
import Card from 'react-bootstrap/Card';

const Discussions = (props) => {
    return (
        <Card className={style.card}>
            <Card.Header className={style.cardHeader}>
                <h2>Discussion Topics</h2>
            </Card.Header>

            <Card.Body className={style.cardBody}>
                {props.discussions.map(discussion =>
                    <div key={discussion.id} className={style.cardContent}>
                        <Card.Subtitle variant="top" className={style.cardDate}>
                            {datePosted(discussion.created_at)}
                        </Card.Subtitle>
                        <Card.Title>
                            <Link to={`/discussions/${discussion.id}`}>{discussion.topic}</Link>
                        </Card.Title>
                        <Card.Subtitle className={style.cardCommentAmnt}>
                            {discussion.comments.length} Comment(s)
                        </Card.Subtitle>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
};

export default Discussions;
