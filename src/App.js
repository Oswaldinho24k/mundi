import React, { Component } from 'react';
import Routes from './Routes';
import NavBar from './components/common/NavBar';
import { Layout } from 'antd';
import Fader from './components/Fader';


const { Footer } = Layout;


class App extends Component {
  render() {
    return (

<section>
    <NavBar />
    <div style={{paddingTop:'64'}}>
       

    <Routes location={window.location}/>
        
        
        <Footer style={{ textAlign: 'center' }}>
            Mundi  ©2017 Created by <a href="http://fixter.org">
                Fixter.org
            </a>
        </Footer>
    </div>

  </section>

    );
  }
}

export default App;
