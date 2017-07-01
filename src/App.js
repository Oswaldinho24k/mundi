import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Menu} from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu>
          <Menu.Item>Home</Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default App;
