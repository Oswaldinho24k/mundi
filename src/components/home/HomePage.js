import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from '../common/Slider';
import firebase from '../../firebase';
import Selector from './Selector';
import Background from '../common/Background';
import logo from '../../assets/mundi_blanco.png';
import {Button, Spin} from 'antd';
import Land from './Land';

//estilos
import './styles.css';


class HomePage extends Component{

    state = {
        loading:true
    };

    componentWillMount(){
        setTimeout(()=>{
            this.setState({loading:false});
        }, 2000);
    }

  
    render(){

        const styles = {
            tabla: {display:'table', textAlign:'center', height:'100vh', width:'100%'},
            portada:{
                textAlign: 'center',
                display: 'table-cell',
                verticalAlign: 'middle'
                // paddingTop:'200px'
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
            },
            loading:{
                backgroundColor:'black',
                display:'table',
                textAlign:'center',
                margin:'0 auto',
                width:'100%',
                height:'93vh',
                position:'fixed'
            },
            spin:{
                display:'table-cell',
                verticalAlign:'middle'
            },
            noScroll:{
                overflow:'hidden',
                position:'fixed'
            }
        };
        const ancho = document.documentElement.clientWidth < 600;
        const {loading} = this.state;
        return(
            <div>
                <div style={styles.tabla}>
                  <Background/>
                  <div style={styles.portada}>
                    <img className="bot" style={styles.logo} src={logo} alt="logo"/>
                    <h1 className='tittle bot'>
                          "La forma más fácil de exportar e importar tus productos"
                     </h1>

                     <p className='slog bot'>
                     La plataforma gratuita más simple para exportar, importar y hacer tus envíos nacionales e internacionales al alcance de un clic.
                     </p>
                     <div className="divs bot">
                      <Link to="/reserva">
                         <Button
                           type="primary">
                     Reservar
                     </Button>
                     </Link>
                     </div>
                    </div>
                </div>
                <Land />


            </div>
        );
    }
}


export default HomePage;
