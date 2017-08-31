import React, { Component } from 'react';
import Routes from './Routes';
import NavBar from './components/common/NavBar';
import { Layout,LocaleProvider } from 'antd';
import Fader from './components/Fader';
import enUS from 'antd/lib/locale-provider/en_US';


const { Footer } = Layout;


class App extends Component {
  render() {
    return (

<section>

    <NavBar />
    <div style={{paddingTop:'64'}}>
       
    <LocaleProvider locale={enUS}>
        <Routes location={window.location}/>
    </LocaleProvider>
        
        
        
    </div>

  </section>

    );
  }
}

export default App;
