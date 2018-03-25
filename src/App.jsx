import React, { Component } from 'react';
import {Route,Link,Switch,NavLink} from 'react-router-dom';
import logo from './img/logo.svg';
import './css/App.css';

import UserList from './page/user/userList'
import Menu from './page/menu/menu'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      menu:[
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <aside className="App-aside">
          <div className="App-aside-header"> <img src={logo} className="App-logo" alt="logo"/> </div>
          <ul className="App-aside-list">
              {/* exact 完全匹配时激活路由及样式 */}
              <NavLink to="/" exact activeClassName="active">USER lIST</NavLink>
              <NavLink to="/Menu" activeClassName="active">MENU</NavLink>
              {/* OTHER */}
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
            <Switch>          
              <Route exact path='/' component={UserList}></Route>
              <Route path='/Menu' component={Menu}></Route>
            </Switch>
          </div>
         </div>
      </div>
    );
  }
}

export default App;
