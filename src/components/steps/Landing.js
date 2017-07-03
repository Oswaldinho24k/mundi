import React, {Component} from 'react';
import { Button, message } from 'antd';
import { Card } from 'antd';
import { Steps, Icon } from 'antd';
import Export from './Export';
import Products from './Products';
import Cliente from './Cliente';
import Agente from './Agente';
import Pago from './Pago';


const Step = Steps.Step;


class Landing extends Component{
    
    agregar = (p) => {

    this.state.products.push(p);
    this.setState({products:this.state.products});
    this.sumale(p.peso);
    this.next();
    }
    
    addCliente = (cliente) => {
        this.setState({cliente});
        this.next();
    }
    
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

    agente = (item) => {
        console.log('agente', item)
        const dates = this.state.dates;
        dates['agente'] = item;
        this.setState({dates});
        this.next();
    };
    
    state = {
        current:0,
        ancho:document.documentElement.clientWidth < 600,
        dates:'',
        products:[],
        cliente:{},
        total:0,
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
        agregar={this.agregar}
        next={this.next}
        exporter={this.exporter}
          />)
    },
        {
        title:'Cliente',
        icon:'user',
        content:(<Cliente
            addCliente={this.addCliente}
          />)
    },
        {
        title:'Agente',
        icon:'rocket',
        content:(<Agente
            agente={this.agente}
          />)
    },
            {
        title:'Pago',
        icon:'credit-card',
        content:(<Pago />)
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

    
    sumale = (peso) => {
        const monto = this.state.dates.precio;
        let costo = parseInt(peso)*monto;
        this.setState({total:this.state.total + costo});
    };

    
    render(){
        const {cliente, total, steps, current, ancho, dates} = this.state;
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
                   {dates.agente && <h4>Agente Aduanal: {dates.agente.empresa}</h4>}
                   <h2>{dates.empresa}</h2>
                   <p>Producto:</p>
                   {this.state.products.map(p=>(
                      
                       <p key={p.nombre}>{p.nombre} - {p.peso} kg</p>
                   ))}
                   
                    <h4>
                        Cliente: {cliente.nombre}
                    </h4>
                   <p>
                       Dirección de envío: {cliente.dir}
                    </p>
                   
                   <h2>
                   Total:
                   <span style={{float:'right'}}>
                           $ {total}
                    </span>
                   </h2>
                   
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