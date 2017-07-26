import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from '../common/Slider';
import firebase from '../../firebase';
import Selector from './Selector';
import Background from '../common/Background';
import logo from '../../assets/mundi.png';
import {Button} from 'antd';




class HomePage extends Component{

  
    render(){
        const ancho = document.documentElement.clientWidth < 600
        return(
        <div>
          <Background/>
          <div style={styles.portada}>
            <img style={styles.logo} src={logo} alt="logo"/>  
            <h1 style={styles.titulo}>
                  EXPORTA A TODO EL MUNDO EN UN PAR DE CLICS
             </h1>
             <Link to="/reserva">
                 <Button
                 ghost
                 style={styles.action}
             >
             Comenzar
             </Button>
             </Link>
             
              
          </div>
        </div>
        );
    }
}

const styles = {
    portada:{
        textAlign:'center',
        paddingTop:'100px'
    },
    titulo:{
        fontSize: '1.8rem',
        color:'white',
        padding:'10px',
        marginBottom:'50px'
    },
    logo:{
        maxWidth: '300px',
        width: '100%'
    },
    action:{
        paddingLeft:'50px',
        paddingRight:'50px',
        fontSize:'1.5rem',
        paddingBottom:'40px',
        marginBottom:'50px'
    },
    mainSelect:{
        position:'absolute',
        top:'20',
        left:'50',
        width:'100%',
        maxWidth:'500px',
        maxHeight:'450px',
        border:'2px solid #66bb6a',
        borderRadius:'10px',
        zIndex:'999',
        background:'rgba(0,0,0,0.8)'

    },
    secondSelect:{
        position:'absolute',
        top:'20',
        right:'50',
        width:'100%',
        maxWidth:'300px',
        height:'500px',
        zIndex:'999',
        borderRadius:'10px',
        background:'rgba(0,0,0,0.8)'
    },
    noShow:{
        display:'none'
    }
}

export default HomePage;
