import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';



class NavBar extends Component{
    render(){
        const ancho = document.documentElement.clientWidth < 600;
        return(
    <div>
     <nav style={styles.nav}>
         <h2
             style={{
                 color:'#66bb6a',
                display:'inline-block',
                 padding:0,
                 margin:0,
                fontSize:'1.3rem',
                    marginRight:'10px'
             }}
         >Mundi</h2>
         <div 
           style={ancho ? styles.noShow:styles.icons}>
            <FontAwesome 
                style={styles.icon}
                name="facebook" 
                size='2x'
            />
             <FontAwesome 
                style={styles.icon}
                name="twitter" 
                size='2x'
            />
             <FontAwesome 
                style={styles.icon}
                name="google-plus" 
                size='2x'
            />
             <FontAwesome 
                style={styles.icon}
                name="youtube" 
                size='2x'
            />
            <FontAwesome 
                style={styles.icon}
                name="instagram" 
                size='2x'
            />
            <div style={styles.icon}>
            {" | "}
            </div>
            <FontAwesome 
                style={styles.icon}
                name="phone"    
            />
            <span style={{
                     color:'grey',
                    fontSize:'1rem'
                 }}>(33)771-34-56</span>
            
         </div>
         <div style={!ancho ? styles.noShow:{display:'inline-block'}}>
              <div style={styles.icon}>
            {" | "}
            </div>
              <FontAwesome 
                style={styles.icon}
                name="phone"    
            />
           
            <span style={{
                     color:'grey',
                    fontSize:'1rem'
                 }}>(33)771-34-56</span>
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
        padding:'17px 20px 0 40px'
    },
    icon:{
        color:'white', 
        display:'inline-block',
        marginRight:'30px',
        fontSize:'1.3rem',
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