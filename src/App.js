import React, { Component } from 'react';

import {Menu} from 'antd';

import Routes from './Routes';
import NavBar from './common/NavBar';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;


class App extends Component {
  render() {
    return (

<Layout>
    <NavBar />
    <Content style={{ padding: '0 50px' }}>
      <Routes />
    <Footer style={{ textAlign: 'center' }}>
        Mundi  ©2017 Created by <a href="http://fixter.org">
            Fixter.org
        </a>
    </Footer>
  </Layout>

    );
  }
}

export default App;
