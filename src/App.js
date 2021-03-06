import React, { Component } from 'react';
import './style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Welcome from './components/Welcome';
import DiscussionsContainer from './containers/DiscussionsContainer';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Route path="/" component={Header}></Route>
        <Route exact path="/" component={Welcome}></Route>
        <Route path="/discussions" component={DiscussionsContainer}></Route>
      </div>
    );
  }
}

export default App;
