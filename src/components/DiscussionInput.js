import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDiscussion } from '../actions/discussions';

class DiscussionInput extends Component {

  state = {
    topic: ''
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addDiscussion(this.state);
    this.setState({
      topic: ''
    });
  };

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
          <input type='submit' />
        </form>
      </div>
    );
  }
}


export default connect(null, { addDiscussion })(DiscussionInput);
