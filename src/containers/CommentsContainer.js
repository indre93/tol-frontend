import React, { Component } from 'react';
import CommentInput from '../components/Comments/CommentInput';
import Comments from '../components/Comments/Comments';

class CommentsContainer extends Component {

  render() {
    return (
      <div>
        <Comments comments={this.props.discussion && this.props.discussion.comments} />
        <CommentInput discussion={this.props.discussion} />
      </div>
    );
  }
}

export default CommentsContainer;
