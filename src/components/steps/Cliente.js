import React, {Component} from 'react';
import {Card, Button} from 'antd';
import './estilos.css';


class Cliente extends Component{
    
    state = {
        cliente:{}
    }
    
    onChange = (e) => {
        const field = e.target.name;
        let cliente = this.state.cliente;
        cliente[field] = e.target.value;
        this.setState({cliente});
    };

    agregar = () => {
        this.props.addCliente(this.state.cliente);
    };
    
    render(){
        return(
            <Card className="el-form" style={styles.card}>
                <p>
                    <input
                     name="nombre"
                      placeholder="Nombre del Cliente"
                      onChange={this.onChange}
                  /> 
                 </p>

                  <p>
                    <input
                    type="tel"
                     name="tel"
                      placeholder="telefono"
                      onChange={this.onChange}
                  />  
                  </p>
                                    <p>
                    <input
                    type="text"
                     name="dir"
                      placeholder="Dirección"
                      onChange={this.onChange}
                  />  
                  </p>
                                    <p>
                    <input
                    type="text"
                     name="pais"
                      placeholder="Pais"
                      onChange={this.onChange}
                  />  
                  </p>
                  
                  <Button 
                     onClick={this.agregar}
                     type="primary">
                      Agregar    
                  </Button>
            </Card>
        );
    }
}

const styles = {
    card:{
        maxWidth:'600px',
        margin:'0 auto',
        marginTop:'30px',
        marginBottom:'30px'
    }
}

export default Cliente;