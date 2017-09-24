import React, {Component} from 'react';
import {Progress, Spin} from 'antd';
import './Cargando.css';



class Cargando extends Component {

    state = {
        progress:0,
        visible:true
    }

    componentWillMount(){
        setInterval (()=>{
            if (this.state.progress<110){
                let time = this.state.progress;
                this.setState({progress:time+1}); 
            }
           
       }, 15);
    }

    componentWillUnmount(){
        this.setState({progress:0});
    }
    render(){
        const { progress, visible} = this.state;
        const {loading} = this.props;
        return(
            <div>
                <div 
                    className="panel1"
                    style={!loading ? styles.noVisible:null}>
                    <div
                       style={
                            {
                            position:'absolute',
                            bottom:0,
                            width:'100%'
                            }
                        }
                       >
                        <h3
                        style={styles.text}
                    >
                        Cargando
                    </h3>
                        {progress<110 && <Progress 
                    percent={progress}  />}
                        {progress==110 && <Spin/>}
                    </div>
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
        opacity:0
    },
    noVisible2:{
        bottom:-800,
        opacity:0
    },
    text:{
        color:'white'
    }
}

export default Cargando;