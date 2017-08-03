import React, {Component} from 'react';
import Type from './selectores/Type';
import './Selector.css';
import From from './selectores/From';
import To from './selectores/To';
import Date from './selectores/Date';
import Quantity from './selectores/Quantity';
import ImgButton from './ImgButton';




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
        click={props.click}
        img={container} 
        text="Full Container" />
        <ImgButton 
        click={props.click}
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
        entrada:'',
        salida:'',
        clase:'',
        display:6,
        current:6
    };
    
    click = () => {
    if (this.state.current < 6){
        this.setState({
            current:this.state.current+1
        });
    } else{
        this.setState({current:1});
    }
//        alert('puto');
        
        console.log(this.state.display);
        this.setState({
            clase:'salir'
        });
        setTimeout(()=>{

            this.setState({
                display:this.state.current,
                clase:'entrar'
            });
            
            console.log(this.state.display);
        }, 200);
        console.log(this.state.display)
    };
    
    
  render(){
      const { clase, display} = this.state;
      return(
        <section
            style={styles.container}       
        >
           <article
                style={styles.middle}  
            >
              
               {display === 1 && 
                   <Containers 
              class={clase} 
              click={this.click}/>}
               {display === 2 && 
                   <Type 
              class={clase} 
              click={this.click}/>}
                {display === 3 && 
                   <From 
              class={clase} 
              click={this.click}/>}
               {display === 4 && 
                   <Date 
              class={clase} 
              click={this.click}/>}
              {display === 5 && 
                   <To 
              class={clase} 
              click={this.click}/>}
              {display === 6 && 
                   <Quantity 
              class={clase} 
              click={this.click}/>}
              

           
              
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