import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LazyComponent from './LazyComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <LazyComponent><h1>The lazy content</h1></LazyComponent>
      </div>
    );
  }
}

export default App;
