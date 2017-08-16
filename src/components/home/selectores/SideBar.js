import React, {Component} from 'react';

import './animations.css';


class SideBar extends Component{
    
    state = {
        eluno:false,
        eldos:false
    }
    
    componentWillMount(){
        setTimeout(()=>{
            this.setState({eluno:true});
        }, 3000);
    }
    
    change = () => {
        this.setState({eldos:!this.state.eldos});
    }
    
    render(){
        const {eluno, eldos} = this.state;
        return(
            <div 
              style={styles.bar}>
               <div style={styles.cell}>
                   
                   {eluno && <div 
                      onClick={this.change}
                       className="aparece" 
                       style={styles.item}>
                        <span style={styles.text}>
                        Booking
                        </span>
                         <span style={{color:'grey'}}>
                        EXPORT
                        </span>
                    </div>}
                    
                   {eldos && <div 
                       className="aparece" 
                       style={styles.item}>
                        <span style={styles.text}>
                        Booking
                        </span>
                         <span style={{color:'grey'}}>
                        VERACRUZ
                        </span>
                    </div>}
                
               </div>
                
            </div>
        );
    }
}

const styles = {
    bar:{
        backgroundColor:'#292e30',
        width:'250px',
        height:'100vh',
//        position:'fixed',
        bottom:0,
        left:0,
        top:'64px',
        paddingRight:'20px',
        transition:'all 488ms ease',
        zIndex:1,
        display:"table",
    },
    cell:{
        display:'table-cell',
        verticalAlign:'middle',
        transition:'all 488ms ease',
    },
    item:{
        backgroundColor:'black',
        color:'white',
        padding:'15px',
//        height:'30px',
        borderRadius:'10px',
        transition:'all 488ms ease',
        marginBottom:'10px'
    },
    text:{
        marginRight:'50px',
        transition:'all 488ms ease',

    }
}

export default SideBar;