import React, {Component} from 'react';
import {Button, InputNumber} from 'antd';
import ImgButton from '../ImgButton';


const xl = "https://kontainers.io/assets/images/container-40-e86464c54ff563760a53475e22a43fa6.png";
const sm = "https://kontainers.io/assets/images/container-04f1fc2e68c6c0f906a05b282a408809.png";



class Quantity extends Component{

    state = {
        pressed:null,
        val:0,
        chico:0,
        grande:0
    }

    handlePress = (id) => {
        const {chico, grande} = this.state;
        this.setState({pressed:id});
        if(id === 1){
            this.setState({val:chico});
        }else if(id === 2){
            this.setState({val:grande});
        }
    };

    changeNumber = (val) => {
        this.setState({val});
        const pressed = this.state.pressed;
        const {chico, grande} = this.state;
        if(pressed === 1){
            this.setState({chico:val});
        }else if(pressed === 2){
            this.setState({grande:val});
        }

    };

    clear = (id) => {
        if(id === 1){
            this.setState({chico:0});
        } else if(id === 2){
            this.setState({grande:0});
        }
    };

    render(){
        const {click} = this.props;
        const {pressed, chico, grande, val} = this.state;
        return(
            <div className={this.props.class}>
                <h2>Agrega los contenedores que necesitas:</h2>
                <br/><br/>
                 <ImgButton
                    class={pressed === 1 ? "img-pressed" : "img-button"} 
                    img={sm} 
                    text="20' Standard"
                    click={()=>this.handlePress(1)} />
                <ImgButton
                    class={pressed === 2 ? "img-pressed" : "img-button"} 
                    img={xl} 
                    text="40' Standard"
                    click={()=>this.handlePress(2)} />

                 {pressed && <div className="cantidad">
                     <h3>¿Cuantos contenedores?</h3>
                    <InputNumber 
                        style={{marginRight:'20px'}}
                        min={0} 
                        max={10} 
                        defaultValue={0} 
                        value={val}
                        onChange={this.changeNumber}/>
                    <Button 
                    type="primary" 
                    onClick={click}
                    loading={chico || grande ? false: true}
                    icon="search">
                        Buscar Opciones
                    </Button>

                 </div>}

                {chico && 
                    <div className="tipo">
                        <img 
                        width="50" 
                        src={sm} 
                        alt="chiquillo"
                        style={{
                            display:'inline-block',
                            marginRight:'10px'
                            }}    
                        />
                        <span
                            style={{}}
                        >{chico} X 20' </span>
                        <h4
                            style={{
                                marginLeft:'10px',
                                display:'inline-block'}}
                        >Standard container</h4>
                <Button
                    type="dashed"
                    icon="delete"
                    style={{marginLeft:'30px'}}
                    onClick={()=>this.clear(1)}
                    >
                    Borrar
                </Button>


                    </div>}

                    {grande && 
                    <div className="tipo">
                        <img 
                        width="50" 
                        src={sm} 
                        alt="grandesillo"
                        style={{
                            display:'inline-block',
                            marginRight:'10px'
                            }}    
                        />
                        <span
                            style={{}}
                        >{grande} X 40' </span>
                        <h4
                            style={{
                                marginLeft:'10px',
                                display:'inline-block'}}
                        >Standard container</h4>
                <Button
                    type="dashed"
                    icon="delete"
                    style={{marginLeft:'30px'}}
                    onClick={()=>this.clear(2)}
                    >
                    Borrar
                </Button>
                    </div>}
                
            </div>
        );  
    }
}

const styles = {
    img: {
        width:'200px',

    }
}

export default Quantity;