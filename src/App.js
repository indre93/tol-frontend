import React, { Component } from 'react';
import './style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import Main from './components/Main';
import DiscussionsContainer from './containers/DiscussionsContainer';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Route path="/" component={Main}></Route>
        <Route path="/discussions" component={DiscussionsContainer}></Route>
      </div>
    );
  }
}

export default App;
