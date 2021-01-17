import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDiscussion } from '../../actions/discussions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import style from '../../style/discussions/DiscussionInput.module.css';

class DiscussionInput extends Component {

  state = {
    topic: ""
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
      topic: ""
    });
  };

  render() {
    return (
      <div className={style.formContainer}>
        <h2>Start a New Discussion</h2>
        <Form onSubmit={this.handleSubmit} className={style.form}>
          <Form.Label as="h3">Topic:</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            type="text"
            name="topic"
            className={style.formInput}
            value={this.state.topic}
            onChange={this.handleChange}
            required
          />
          <Button variant="outline-dark" size="lg" type="submit">
            Submit
                    </Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, { addDiscussion })(DiscussionInput);
