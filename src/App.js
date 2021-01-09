import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Route path="/">
          <Home />
        </Route>
      </div>
    );
  }
}

export default App;
