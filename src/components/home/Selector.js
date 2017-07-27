import React, {Component} from 'react';

import './Selector.css';

const container = "https://kontainers.io/assets/images/container-04f1fc2e68c6c0f906a05b282a408809.png";
const less = "https://kontainers.io/assets/images/pallet-0c751549b36bb2909aada2c8108f5558.png"

const ImgButton = (props) => (
    <div
        className="img-button"  
    >
        <img width="200" src={props.img} alt="container"/>
        <p>{props.text}</p>

    </div>
); 

const Containers = props => (
    <div>
         <h1
            >
            ¿Qué necesitas?
        </h1>
        <br/>
        <br/>
        <br/>
        <ImgButton img={container} text="Full Container" />
        <ImgButton img={less} text="Less than a  Container" />
    </div>
);

class Selector extends Component{
  render(){
      return(
        <section
            style={styles.container}       
        >
           <article
                style={styles.middle}  
            >
              
              <Containers/>
              
           </article>
            
        </section>
      );
  }  
}

const styles = {
    container:{
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