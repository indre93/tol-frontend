import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../actions/comments';
import style from './CommentInput.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CommentInput extends Component {

  state = {
    username: '',
    content: ''
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
      username: '',
      content: ''
    });
  };

  render() {
    return (
      <div>
        <h3>Add Comment</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input
            type='text'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label>Comment: </label>
          <input
            type='text'
            name='content'
            value={this.state.content}
            onChange={this.handleChange}
          />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default connect(null, { addComment })(CommentInput);
