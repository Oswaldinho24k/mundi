import React, {Component} from 'react';
import { Button, message } from 'antd';
import { Card } from 'antd';
import { Steps, Icon } from 'antd';
import Export from './Export';
import Products from './Products';

const Step = Steps.Step;


class Landing extends Component{
    
    next = () => {
        const current = this.state.current + 1;
        this.setState({ current });
    };

    exporter = (item) => {
        const dates = this.state.dates;
        dates['exporter'] = item;
        dates['precio'] = item.precio;
        dates['empresa'] = item.empresa;
        this.setState({dates});
    };
    
    state = {
        current:0,
        ancho:document.documentElement.clientWidth < 600,
        dates:'',
        steps:[
    {
        title:'Compañia',
        icon:'shop',
        content:(<Export 
        lupe="lupe" 
        next={this.next}
        exporter={this.exporter}
          />)
    },
        {
        title:'Productos',
        icon:'tags',
        content:(<Products 
        lupe="lupe" 
        next={this.next}
        exporter={this.exporter}
          />)
    },
        {
        title:'Cliente',
        icon:'user',
        content:(<div>Gato</div>)
    },
        {
        title:'Agente',
        icon:'rocket',
        content:(<div>Perico</div>)
    }
]
    }
    

    prev = () => {
        const current = this.state.current - 1;
        this.setState({ current });
    };

    componentWillMount(){
         const dates = JSON.parse(localStorage.getItem('reserva'));
        this.setState({dates});
    }


    
    render(){
        const {steps, current, ancho, dates} = this.state;
        return(
            <section style={styles.container}>
               
               <Card style={{marginBottom:50}}>
                   <h2>
                       {dates.destino}
                       <span style={{float:'right'}}>
                           $ {dates.precio} X Kilo
                       </span>
                   </h2>
                   <h3>Fecha de embarque: {dates.fecha}</h3>
                   <h2>{dates.empresa}</h2>
               </Card>
               
               
                <Steps current={current}>
                {steps.map(item=><Step key={item.title} title={!ancho && item.title} icon={<Icon type={item.icon} />}  /> )}
                </Steps>
                
                <div style={styles.content}>
                {steps[current].content}
                </div>
                
                
                
                 {
            this.state.current < steps.length - 1
            &&
            <Button type="primary" onClick={ this.next}>Next</Button>
          }
          {
            this.state.current === steps.length - 1
            &&
            <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
          }
          {
            this.state.current > 0
            &&
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          }

            </section>
            
        );
    }
}

const styles = {
    container:{
        width:'80%',
        margin:'0 auto',
        marginTop:'50px'
    },
    content:{
        margin:'0 auto',
        marginTop:'50px',
    }
}

export default Landing;