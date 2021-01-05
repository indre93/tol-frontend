import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions/comments';

class CommentInput extends Component {

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
