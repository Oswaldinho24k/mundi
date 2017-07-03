import React, {Component} from 'react';
import Slider from '../common/Slider';
import firebase from '../../firebase';
import Selector from './Selector';


class HomePage extends Component{

  
    render(){
        const ancho = document.documentElement.clientWidth < 600
        return(
        <div style={styles.portada}>
           <div style={styles.mainSelect}>
            <Selector/>
           </div>
           <div style={ancho ? styles.noShow:styles.secondSelect}></div>
           <Slider />
        </div>
        );
    }
}

const styles = {
    portada:{
        position:'relative'
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
