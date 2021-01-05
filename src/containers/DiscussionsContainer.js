import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDiscussions } from '../actions/fetchDiscussions';
import DiscussionInput from '../components/DiscussionInput';
import Discussions from '../components/Discussions';

class DiscussionsContainer extends Component {

  componentDidMount() {
    this.props.fetchDiscussions();
  }

  render() {
    return (
      <div>
        <DiscussionInput />
        <Discussions discussions={this.props.discussions} />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    discussions: state.discussions
  };
};

export default connect(mapStateToProps, { fetchDiscussions })(DiscussionsContainer);
