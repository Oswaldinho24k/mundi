import React, {Component} from 'react';
import Slider from '../common/Slider';
import firebase from '../../firebase';


class HomePage extends Component{

  componentWillMount(){
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        console.log(user)
      } else {
        // No user is signed in.
      }
    });
  }
    render(){
        const ancho = document.documentElement.clientWidth < 600
        return(
        <div style={styles.portada}>
           <div style={styles.mainSelect}>
           mta
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
        height:'400px',
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
