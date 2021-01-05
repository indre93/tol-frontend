import React, { Component } from 'react';
import CommentInput from '../components/CommentInput';
import Comments from '../components/Comments';

class CommentsContainer extends Component {

  render() {
    return (
      <div>
        <CommentInput />
        <Comments />
      </div>
    );
  }
}

export default CommentsContainer;
