import React, {Component} from 'react';
import { Carousel } from 'antd';
import uno from '../../assets/slide/1.jpeg';
import dos from '../../assets/slide/2.jpg';
import tres from '../../assets/slide/3.jpeg';
import cuatro from '../../assets/slide/4.jpeg';
import cinco from '../../assets/slide/5.jpeg';
import seis from '../../assets/slide/6.jpeg';
import siete from '../../assets/slide/7.jpg';
import nueve from '../../assets/slide/9.jpg';
import once from '../../assets/slide/11.jpg';
import doce from '../../assets/slide/12.jpeg';



class Slider extends Component{
    render(){
        return(
            <Carousel autoplay>
                <div>
                    <img src={uno} alt=""/>
                </div>
                <div>
                    <img src={dos} alt=""/>
                </div>
                <div>
                    <img src={tres} alt=""/>
                </div>
                <div>
                    <img src={cuatro} alt=""/>
                </div>
                <div>
                    <img src={cinco} alt=""/>
                </div>
                <div>
                    <img src={seis} alt=""/>
                </div>
                <div>
                    <img src={siete} alt=""/>
                </div>
                <div>
                    <img src={nueve} alt=""/>
                </div>
                <div>
                    <img src={once} alt=""/>
                </div>
                <div>
                    <img src={doce} alt=""/>
                </div>
              </Carousel>
        );
    }
}

export default Slider;