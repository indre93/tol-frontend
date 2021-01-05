import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchDiscussions } from '../actions/discussions';
import DiscussionInput from '../components/DiscussionInput';
import Discussions from '../components/Discussions';
import Discussion from '../components/Discussion';

class DiscussionsContainer extends Component {

  componentDidMount() {
    this.props.fetchDiscussions();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/discussions/new' component={DiscussionInput} />
          <Route path='/discussions/:id' render={(routerProps) =>
            <Discussion {...routerProps} discussions={this.props.discussions} />
          } />
          <Route path='/discussions' render={(routerProps) =>
            <Discussions {...routerProps} discussions={this.props.discussions} />
          } />
        </Switch>
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
