import React, {Component} from 'react';
import Type from './selectores/Type';
import './Selector.css';
import From from './selectores/From';
import To from './selectores/To';
import Date from './selectores/Date';
import Quantity from './selectores/Quantity';
import ImgButton from './ImgButton';
import Cargando from '../common/Cargando';
import Results from './selectores/Results';
import SideBar from './selectores/SideBar';
import firebase from '../../firebase';
import {message} from 'antd';

const container = "https://kontainers.io/assets/images/container-04f1fc2e68c6c0f906a05b282a408809.png";
const less = "https://kontainers.io/assets/images/pallet-0c751549b36bb2909aada2c8108f5558.png"



const Containers = props => (
    <div className={props.class}>
         <h1
            >
            ¿Qué necesitas?
        </h1>
        <br/>
        <br/>
        <br/>
        <ImgButton 
        click={()=>{props.SetConsulta("container", "full"); props.click();}}
        img={container} 
        text="Full Container" />
        <ImgButton
            click={()=>{props.SetConsulta("container", "less"); props.click();}}
        img={less} 
        text="Less than a  Container" />
    </div>
);

const Test = props => (
    <div className={props.class}>
         <h1
            >
            ¿Qué tranza?
        </h1>
        <br/>
        <br/>
        <br/>
        <ImgButton 
        click={props.click}
        img={container} text="Full Container" />
        <ImgButton 
        click={props.click}
        img={less} text="Less than a  Container" />
    </div>
);

class Selector extends Component{
    
    state = {
        consulta:{},
        display:1,
        current:1,
        loading:true
    };

    componentDidMount(){
        setTimeout(()=>{
            this.setState({loading:false});
        }, 2000);
        
    }

    changeLoading = () => {
        this.setState({loading:!this.state.loading});
        
        setTimeout(()=>{
            this.doSearch(this.state.consulta);
            this.click();
            this.setState({loading:!this.state.loading});
            
        }, 4000);
    };

    //Por ahora doSearch guarda en firebase solamente.
    doSearch = (data) => {
        firebase.database().ref('busquedas')
            .push(data)
                .then(r=>{
                    this.setState({searchId:r.key});
                    message.success("Tu busqueda se guardó")
                })
                .catch(e=>message.error("Algo muy malo pasó"));
    };
    
    click = () => {
    if (this.state.current < 7){
        this.setState({
            current:this.state.current+1
        });
    } else{
        this.setState({current:1});
        this.props.history.push('/pay/'+this.state.searchId);
    }
        
        //console.log(this.state.display);
        this.setState({
            clase:'salir'
        });
        setTimeout(()=>{

            this.setState({
                display:this.state.current,
                clase:'entrar'
            });
            
            // console.log(this.state.display);
        }, 200);
       // console.log(this.state.display)
    };

    changeCurrent=(number)=>{
        this.setState({display:number, current:number});
    };

    SetConsulta = (field, data) => {
        let consulta = this.state.consulta;
        consulta[field] = data;
        this.setState({consulta});
        console.log(this.state.consulta);
    };
    
    
  render(){
      const { clase, display, loading} = this.state;
     // console.log(loading);
      return(
        <section
            style={styles.container}       
        >
            <Cargando loading={loading} />
        
           <SideBar
               changeCurrent={this.changeCurrent}
               display={display}/>
            
           <article
                style={styles.middle}  
            >
              
               {display === 1 && 
                   <Containers
                       SetConsulta={this.SetConsulta}
              class={clase} 
              click={this.click}/>}
               {display === 2 && 
                   <Type
                       SetConsulta={this.SetConsulta}
              class={clase} 
              click={this.click}/>}
                {display === 3 && 
                   <From
                       SetConsulta={this.SetConsulta}
              class={clase} 
              click={this.click}/>}
               {display === 4 && 
                   <Date
                       SetConsulta={this.SetConsulta}
              class={clase} 
              click={this.click}/>}
              {display === 5 && 
                   <To
                       SetConsulta={this.SetConsulta}
              class={clase} 
              click={this.click}/>}
              {display === 6 && 
                   <Quantity
                       SetConsulta={this.SetConsulta}
              class={clase} 
              click={this.click}
              changeLoading={this.changeLoading}
              loading={loading}
              />}

               {display === 7 && 
                   <Results 
              class={clase} 
              click={this.click}
              changeLoading={this.changeLoading}
              loading={loading}
              />}
              

           
              
           </article>
            
        </section>
      );
  }  
}

const styles = {
    container:{
        overflow:'hidden',
        minWidth:'100%',
        minHeight:'70vh',
        width:'auto',
        height:'auto',
        textAlign:'center',
//        paddingTop:'30%',
//        lineHeight: '400px'
        display:'table'
    },
    middle:{
        display:'table-cell',
        verticalAlign: 'middle'
    },
}

export default Selector;