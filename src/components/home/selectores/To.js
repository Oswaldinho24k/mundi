import React from 'react';
import {Icon, Spin} from 'antd';


class To extends React.Component{
    
    state = {
        from:'',
        result:[
            {
            id:1,
            nombre:"Veracruz",
            pais:"México"
        },
            {
            id:2,
            nombre:"Veracruz",
            pais:"México"
        },
            {
            id:3,
            nombre:"Veracruz",
            pais:"México"
        },
            {
            id:4,
            nombre:"Veracruz",
            pais:"México"
        }
        ],
        list:[],
        loading:false
    }
    
    onChange = (e) => {
        let result = this.state.result;
        const search = e.target.value;
        this.setState({loading:true});
        setTimeout(()=>{
            this.setState({list:result, loading:false});
            
        }, 2000);
        
        
    }

    render(){
        const {loading, list} = this.state;
        const {click} = this.props;
        return(
            <div 
              className={this.props.class}>
               <h2>¿A donde Exportas?: </h2>
                <input
                  onChange={this.onChange}
                   style={styles.input}
                    placeholder="Cualquier puerto o lugar"
                />
                <br/>
                <br/>
                {loading && <Spin size="large" />}
                <ul className="ListaResultados">
                    {list.map(
                        l=><li 
                            key={l.id}
                            onClick={click}
                            className="list-element">
                            <Icon style={{paddingRight:15, fontSize:'1.2rem'}} type="environment"/>
                            <span>{l.nombre}, </span>
                            {l.pais}
                            </li>
                    )}
                </ul>
            </div>
            
        );       
    }

}

const styles = {
   input:{
       width:'50%',
       height:'64px',
       border:'none',
       borderBottom:'1px solid grey',
       fontSize:'1.5rem'
       
       
   }
}

export default To;