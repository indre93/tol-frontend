import React, { Component } from 'react';
import CommentInput from '../components/CommentInput';
import Comments from '../components/Comments';

class CommentsContainer extends Component {

  render() {
    return (
      <div>
        <CommentInput />
        <Comments comments={this.props.discussion && this.props.discussion.comments} />
      </div>
    );
  }
}

export default CommentsContainer;
