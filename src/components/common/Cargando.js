import React, {Component} from 'react';

import './Cargando.css';



class Cargando extends Component {

    state = {
        progress:0,
        visible:true
    }

    // componentWillReceiveProps(props){
    //     if(props.loading){
    //         this.setState({loading:props.loading});
    //         this.setState({visible:props.loading})
    //     }
    // }

    // componentDidMount(){
    //     console.log(this.props.loading);
    //     this.setState({visible:this.props.loading});
        
    //     // setInterval(()=>{
    //     //     this.setState({visible:!this.state.visible});
    //     // }, 3000);
    // }

    render(){
        const { progress, visible} = this.state;
        const {loading} = this.props;
        return(
            <div>
                <div 
                    className="panel1"
                    style={!loading ? styles.noVisible:null}>
                    <h3
                        style={styles.text}
                    >Cargando</h3>
                    <h3
                        style={styles.text}
                    >Progreso: {progress}</h3>
                </div>
                <div 
                    className="panel2"
                    style={!loading ? styles.noVisible2:null}
                    >

                </div>
            </div>
        );
    }
}

const styles = {
    visible:{
    
    },
     noVisible:{
        top:-800,
        // opacity:0
    },
    noVisible2:{
        bottom:-800,
        // opacity:0
    },
    text:{
        color:'white'
    }
}

export default Cargando;