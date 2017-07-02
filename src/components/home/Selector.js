import React, {Component} from 'react';
import { Tabs, Icon, message } from 'antd';
import './styles.css';
import Barco from './selectores/Barco';
import Avion from './selectores/Avion';

const TabPane = Tabs.TabPane;



class Selector extends Component{
    
    state = {
      loading:false  
    };
    
    onSearch = () => {
      this.setState({loading:true}) 
      setTimeout(()=>{this.setState({
          loading:false});
            message.warning('no encontramos reservas', 3);
                     },3000);
    };
    
    render(){
        return(
    <Tabs 
       tabBarStyle={{
                    color:'white'
                }}
       defaultActiveKey="1">
        <TabPane 
      style={{color:'white'}}
         tab={<span><Icon type="global" />Barco</span>} key="1">
        <Barco loading={this.state.loading} onSearch={this.onSearch}/>
     </TabPane>
        <TabPane 
        style={{color:'white'}}
         tab={<span><Icon type="rocket" />Avión</span>} key="2">
        <Avion/>
        </TabPane>
        <TabPane 
        style={{color:'white'}}
         tab={<span><Icon type="disconnect" />tren</span>} key="3">
          Tab 2
        </TabPane>
        <TabPane 
        style={{color:'white'}}
         tab={<span><Icon type="car" />Camión</span>} key="4">
          Tab 2
        </TabPane>
      </Tabs>
        );
    }
}

const styles = {
    verde:{
        color:'#66bb6a'
    },
    divider:{
        width:'100%',
        margin:'10px 0 10px 0',
        border:'0.5px solid white'
    }
}

export default Selector;