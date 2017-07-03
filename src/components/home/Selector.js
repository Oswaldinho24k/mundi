import React, {Component} from 'react';
import { Tabs, Icon, message } from 'antd';
import './styles.css';
import Barco from './selectores/Barco';
import Avion from './selectores/Avion';

const TabPane = Tabs.TabPane;



class Selector extends Component{
    
    state = {
        loading:false,
        reserva:{
            origen:'',
            destino:'',
            fecha:'',
            notificar:false
        }
    };

    onChange = (e, a) => {
        let reserva = this.state.reserva;
        console.log(typeof e);
        console.log(typeof a);
        console.log(e);
        console.log(a);
        const field = e.target.name;
        reserva[field] = e.target.value;
        this.setState({reserva});
    };

    onAutocomplete = (value, label) =>{
        let reserva = this.state.reserva;
        reserva[label] = value;
        this.setState({reserva});
    };
    
    onSearch = () => {
        console.log(this.state.reserva);
      this.setState({loading:true}) 
      setTimeout(()=>{this.setState({
          loading:false});
            message.success('Hemos encontrado reservas para ti', 3);
        localStorage.setItem('reserva', JSON.stringify(this.state.reserva));
            this.props.history.push('/reserva')
                      
                     },3000);
        
    };

    onChecked = (e) => {
        let reserva = this.state.reserva;
        const field = e.target.name;
        reserva[field] = e.target.checked;
        console.log(e.target.checked)
        this.setState({reserva});
    };

    onDate = (a,b) => {
        let reserva = this.state.reserva;
        reserva['fecha'] = b;
        this.setState({reserva});
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
        <Barco 
        loading={this.state.loading} 
        onSearch={this.onSearch}
        onChange={this.onChange}
        onAutocomplete={this.onAutocomplete}
        onChecked={this.onChecked}
        onDate={this.onDate}
        />
     </TabPane>
        <TabPane 
        style={{color:'white'}}
         tab={<span><Icon type="rocket" />Avión</span>} key="2">
        <Avion
            loading={this.state.loading} 
            onSearch={this.onSearch}
            onChange={this.onChange}
            onAutocomplete={this.onAutocomplete}
            onChecked={this.onChecked}
            onDate={this.onDate}
        />
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