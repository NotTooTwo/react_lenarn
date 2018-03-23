import React, { Component } from 'react';
import logo from './img/logo.svg';
import './css/App.css';

import UserList from './page/user/userList'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      lsitStatue:{
        useNum:1,
        menuNum:1,
        otherNum:1
      }
    }

  }
  render() {
    return (
      <div className="App">
        <aside className="App-aside">
          <div className="App-aside-header"> <img src={logo} className="App-logo" alt="logo"/> </div>
          <ul className="App-aside-list">
              <li className="active">USER lIST({this.state.lsitStatue.useNum})</li>
              <li>MENU({this.state.lsitStatue.menuNum})</li>
              <li>OTHER({this.state.lsitStatue.otherNum})</li>
          </ul>
        </aside>
        <div className="App-other">
          <nav className="App-nav">
            <div></div>
            <div className="App-nav-user">
              <span>User : </span><span>butaier</span>
            </div>
          </nav>
          <div>
          <UserList  />
          </div>
         </div>
      </div>
    );
  }
}

export default App;
