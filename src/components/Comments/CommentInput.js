import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../actions/comments';
import style from './CommentInput.module.css';
import Form from 'react-bootstrap/Form';

class CommentInput extends Component {

    state = {
        username: "",
        content: ""
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addComment(this.state, this.props.discussion.id);
        this.setState({
            username: "",
            content: ""
        });
    };

    render() {
        return (
            <div className={style.formContainer}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Control
                        type="text"
                        name="content"
                        placeholder="Enter comment"
                        className={style.formInput}
                        value={this.state.content}
                        onChange={this.handleChange}
                        required
                    />
                    <button className={style.formBtn} type="submit">Submit</button>
                </Form>
            </div>
        );
    }
}

export default connect(null, { addComment })(CommentInput);
