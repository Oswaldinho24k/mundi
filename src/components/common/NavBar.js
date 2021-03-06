import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import './NavBar.css';
import {Popover, Button, message} from 'antd';
import LogIn from '../users/LogIn';
import firebase from '../../firebase';
import logo from '../../assets/log_mundi.png';



class NavBar extends Component{


  state={
    logged:false,
    user:{
      email:''
    }
  }
  componentWillMount(){
    firebase.auth().onAuthStateChanged((user) =>{
      if (user) {
        this.setState({logged:true, user})
      } else {
        this.setState({logged:false})
      }
    });

  }
  logOut=()=>{
    firebase.auth().signOut().then(()=> {
      message.success('Vuelve pronto ;)')

    }, (error)=> {
      // An error happened.
    });
  }


    render(){
        const ancho = document.documentElement.clientWidth < 600;
        return(
    <div>
     <nav style={styles.nav}>
         <Link to="/">
          <img src={logo} className='log_box'/>
          
         </Link>

         <div
           style={ancho ? styles.noShow:styles.icons}>
         

            <FontAwesome
                style={styles.icon}
                name="phone"
            />

            <span style={{
                     color:'grey',
                    fontSize:'1rem',
                    marginRight:'30px'
                 }}>(33)771-34-56</span>
           <div style={styles.icon}>
         {" | "}
         </div>

         {this.state.logged?

             <Popover
               title={'Usuario: '+ this.state.user.email}
               placement="bottomLeft"
               content={
                 <div>
                   <Link to="/userprofile">
                     <p>Perfil</p>
                   </Link>
                   <Link to="" onClick={this.logOut}>
                     <p>Salir</p>
                   </Link>
                 </div>
               }  trigger="hover">
               <span style={{color:'grey',fontSize:'1rem'}}>Perfil</span>
             </Popover>
              :
              <Link to="/login">
                    <span
                      style={{
                             color:'grey',
                            fontSize:'1rem'
                         }}>Inicia</span>
             </Link>

          }








         </div>
         <div style={!ancho ? styles.noShow:{display:'inline-block'}}>
              <div style={styles.icon}>
            </div>
              <FontAwesome
                style={styles.icon}
                name="phone"
            />

            <span style={{
                     color:'grey',
                    fontSize:'1rem'
                 }}>
                <a href="callto:337713456">
                    (33)771-34-56
                </a>
            </span>

         </div>
         <div>


         </div>
     </nav>
    </div>
        );
    }
}

const styles = {
  logo:{
      width: '120px',
      height: '31px',
      background: '#333',
      borderRadius: '6px',
      margin: '16px 24px 16px 0',
      float: 'left'
  } ,
    nav:{
        transition:'all 1s ease',
        position:'fixed',
        width:'100%',
        height:'64px',
        backgroundColor:'black',
        padding:'17px 20px 0 40px',
        zIndex:999
    },
    icon:{
        color:'white',
        display:'inline-block',
        marginRight:'5px',
        fontSize:'1rem',
        cursor:'pointer'
    },
    icons:{
        display:'inline-block',
        float:'right'
    },
    noShow:{
        display:'none'
    }
};

export default NavBar;
