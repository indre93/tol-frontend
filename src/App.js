import React, { Component } from 'react';
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
