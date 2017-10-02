import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';


import './animations.css';


class SideBar extends Component{

    
    componentWillMount(){
        setTimeout(()=>{
            this.setState({eluno:true});
        }, 3000);


    }


    
    change = (number) => {
        this.props.changeCurrent(number);
    };

    
    render(){
        const {display} = this.props;

        return(
            <div 
              className="side-bar">

            <div
             className="cell">
             <QueueAnim 
             type={['left', 'left']}>
                     
                 {display > 0 && <div
                    key="1"
                    onClick={()=>this.change(1)}
                    className="item"
                    >
                    <span style={styles.text}>
                        Booking
                    </span>
                    <span className="hide-if-movil" style={{color:'grey'}}>
                        EXPORT
                    </span>
                </div>}

               {display > 1 && <div
                    key="2"
                    onClick={()=>this.change(2)}
                    className="item"
                    >
                    <span style={styles.text}>
                        Details
                    </span>
                   <span className="hide-if-movil" style={{color:'grey'}}>
                        CONTENT
                    </span>
                </div>}

                 {display > 2 && <div
                     key="3"
                     onClick={()=>this.change(3)}
                     className="item"
                 >
                    <span style={styles.text}>
                        From
                    </span>
                     <span className="hide-if-movil" style={{color:'grey'}}>
                        PORT
                    </span>
                 </div>}

                 {display > 3 && <div
                     key="4"
                     onClick={()=>this.change(4)}
                     className="item"
                 >
                    <span style={styles.text}>
                        Date
                    </span>
                     <span className="hide-if-movil" style={{color:'grey'}}>
                        CARGO
                    </span>
                 </div>}

                 {display > 4 && <div
                     key="5"
                     onClick={()=>this.change(5)}
                     className="item"
                 >
                    <span style={styles.text}>
                        To
                    </span>
                     <span className="hide-if-movil" style={{color:'grey'}}>
                        PORT
                    </span>
                 </div>}

                 {display > 5 && <div
                     key="6"
                     onClick={()=>this.change(6)}
                     className="item"
                 >
                    <span style={styles.text}>
                        Quantity
                    </span>
                     <span className="hide-if-movil" style={{color:'grey'}}>
                        CONTAINERS
                    </span>
                 </div>}

                 {display > 6 && <div
                     key="7"
                     onClick={()=>this.change(7)}
                     className="item"
                 >
                    <span style={styles.text}>
                        Options
                    </span>
                     <span className="hide-if-movil" style={{color:'grey'}}>
                        SELECT
                    </span>
                 </div>}

</QueueAnim>
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
        position:'fixed',
        bottom:0,
        left:0,
        top:'64px',
        paddingRight:'20px',
        paddingLeft:'20px',
        transition:'all 488ms ease',
        zIndex:99,
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
        // transition:'all 488ms ease',
        marginBottom:'10px',
        cursor:'pointer'
    },
    text:{
        marginRight:'50px',
        transition:'all 488ms ease',
        textAlign:'center'

    }
};

 

export default SideBar;


            //    <QueueAnim style={styles.cell}>
                   
            //        {eluno && <div key="eluno"
            //           onClick={this.change}
            //            className="aparece" 
            //            style={styles.item}>
            //             <span style={styles.text}>
            //             Booking
            //             </span>
            //              <span style={{color:'grey'}}>
            //             EXPORT
            //             </span>
            //         </div>}
                    
            //        {eldos && <div key="eldos"
            //            className="aparece" 
            //            style={styles.item}>
            //             <span style={styles.text}>
            //             Booking
            //             </span>
            //              <span style={{color:'grey'}}>
            //             VERACRUZ
            //             </span>
            //         </div>}
                
            //    </QueueAnim>



                        