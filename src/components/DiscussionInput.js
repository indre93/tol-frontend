import React, { Component } from 'react';

class DiscussionInput extends Component {
  render() {
    return (
      <div>
        <h1>Start a New Discussion</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Topic: </label>
          <input
            type='text'
            name='topic'
            value={this.state.topic}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}


export default DiscussionInput;
