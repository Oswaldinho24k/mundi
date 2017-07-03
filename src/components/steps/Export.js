import React, {Component} from 'react';
import {Card} from 'antd';
import firebase from '../../firebase';
import { Spin, Button } from 'antd';



class Export extends Component{
    
    state = {
        options:[],
        item:'',
        loading:true
    }
    
    componentWillMount(){
        firebase.database().ref('options')
        .on('child_added', (snap)=>{
            
            const i = snap.val();
            i['id'] = snap.key;
            let options = this.state.options;
            options.push(i);
            this.setState({options, loading:false});
            
        });
    }

    seleccionado = (item) => {
        this.setState({item});
        this.props.exporter(item);
        this.props.next();
    }
    
    render(){
        const {loading, options} = this.state;
        return(
            <div>
              
                
               <h1>
                   Selecciona la mejor opción para ti.
                </h1>
                <br/>
                
                 <div  style={{textAlign: 'center', width:'100%'}}>
                   {loading && <Spin
                    style={{margin:'0 auto'}}
                  />}
               </div>
                
                {options.map(o=>(
                    <Card style={styles.card} key={o.id} title={o.empresa} extra={<Button onClick={()=>this.seleccionado(o)}>Seleccionar</Button>} >
                    <p>Horario:  {o.horario}</p>
                    <p>Precio: {o.precio}</p>
                  </Card>
                    ))}
            </div>  
            
          
        );
    }
}

const styles = {
    card:{
        margin:'20px',
        width: '100%' 
    }
}

export default Export;