import React from 'react';
import {Icon} from 'antd';


const Option = props => (
            <div style={props.styles.option}>
            <span >
                {props.pregunta}
            </span>
        {document.documentElement.clientWidth < 600 && <div><br/> <br/></div>}
            <span 
               onClick={props.select}
               name={props.name}
               value="true"
               style={props.selected ? styles.iconButtonPressed:styles.iconButton}>
                <Icon style={props.styles.icon} type="check" />
                <span>Si</span>
            </span>
            
            <span 
               onClick={props.select}
               name={props.name}
               value="false"
               style={!props.selected && props.selected !== null ? styles.iconButtonPressed:styles.iconButton}>
                <Icon style={props.styles.iconRed} type="close" />
                <span>No</span>
            </span>
        </div>
);


class Type extends React.Component{
    
    state = {
        style:styles.iconButton,
        selected:{danger:null,refri:null, detalles:null}
    };
    
    select = (e) => {
        const field = e.currentTarget.getAttribute('name');
        const value = e.currentTarget.getAttribute('value');
        console.log(field);
        console.log(value);
        let selected = this.state.selected;
        selected[field] = value === 'true';
        this.setState({selected});
        
//      this.props.optionsSelect(field);
        this.shouldChange();
        
    }
    
    shouldChange = () => {
        const s = this.state.selected;
        for (let key in s){
            if(s[key] === null){
                return false;
            }
        }
        this.props.SetConsulta("options",this.state.selected);
        this.props.click();
    };
    
    render(){
        const {style, selected} = this.state;
        return(
    <div className={this.props.class}>
        <h2>Escoge tus opciones</h2>
        <br/><br/>
        <Option
            styles={styles}
            select={this.select}   
            selected={selected.danger} 
            name="danger"
            pregunta="¿Estás exportando material peligroso?"
        />
        <Option
            styles={styles}
            select={this.select}   
            selected={selected.refri} 
            name="refri"
            pregunta="¿Necesitas un contenedor refrigerado?"
        />
        <Option
            styles={styles}
            select={this.select}   
            selected={selected.detalles} 
            name="detalles"
            pregunta="¿Quieres que revisemos los detalles por ti?"
        />

        <div style={styles.spaceBottom}></div>
        

        
        
        
        
    </div>
        );       
    }

}

const styles = {
    option: {
        backgroundColor:'#F0F0F0',
        padding:'40px',
        width:document.documentElement.clientWidth < 600 ? '100%':'60%',
        margin:'0 auto',
        borderRadius:'5px',
        marginBottom:'30px',
//        fontSize:'.9rem'
        
    },
    icon:{
        fontSize:'1.5rem',
        color:'green'
    },
    iconRed:{
        fontSize:'1.5rem',
        color:'red'
    },
    iconButton:{
        backgroundColor:'white',
        marginLeft:'40px',
        padding:'20px',
         boxShadow: '1px 1px 1px 1px #888888',
        borderRadius:'4px',
        cursor:'pointer'
    },
    iconButtonPressed:{
        backgroundColor:'white',
        marginLeft:'40px',
        padding:'20px',
        boxShadow: 'inset 1px 1px 1px #888888',
        borderRadius:'5px',
        cursor:'pointer'
    },
    spaceBottom:{
        marginBottom:'100px'
    }
};

export default Type;