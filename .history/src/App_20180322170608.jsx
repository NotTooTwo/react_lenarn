import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <aside className="App-aside">
          <div className="App-aside-header"> 头 </div>
          <ul className="App-aside-list">
              <li>1</li>
              <li>2</li>
              <li>3</li>
          </ul>
        </aside>
        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </div>
      </div>
    );
  }
}

export default App;
