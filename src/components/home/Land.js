/**
 * Created by brendaortega on 22/09/17.
 */
import React, {Component} from 'react';
import './Land.css';
import FontAwesome from 'react-fontawesome';
import { Button } from 'antd';
import OwlCarousel from 'react-owl-carousel2';
import Footer from '../footer/Footer';
import sr from './scrollReveal.js';


class Land extends Component{
    componentDidMount () {
        const config3 = {
            origin: 'bottom',
            duration: 800,
            delay: 100,
            distance: '100%',
            scale: 1,
            easing: 'ease',
        }

        sr.reveal('.bot', config3);

    }
    state = {
        loading: false,
        iconLoading: false,
    }

    enterLoading = () => {
        this.setState({ loading: true });
    }

    enterIconLoading = () => {
        this.setState({ iconLoading: true });
    }

    render(){
        const options = {
            items: 3,
            nav: false,
            loop:true,
            autoplay: true

        };
        return(
            <div className='homi'>
                <div className="empezar">
                    <div className="text_section">
                        <h2 className="titulo bot">Una plataforma
                            <br /> hecha para ti</h2>
                        <p className="text bot">
                            Sea que envíes a nivel nacional o internacional
                            <br />Mundi puede ayudarte.
                            <br />Por cielo, mar y tierra tenemos una solución para ti.


                        </p>
                        <Button className='btn_empezar bot' type="primary" size="large" loading={this.state.loading} onClick={this.enterLoading}>
                           Empezar
                        </Button>
                        <br />
                        <p className="letras bot">
                            ¿Necesitas ayuda? Ponte en contacto con nosotros
                        </p>
                    </div>
                    <div className="promo bot">
                        <div className="cubierta">

                            <span>Centraliza tu proceso de exportación o importación en un mismo lugar</span>
                        </div>
                    </div>
                    <div className="beneficios ">

                        <div className="flex">
                            <div className="ventaja bot">
                                <h2>Transporte simple</h2>
                                <p className="subtitulo">Terrestre, marítimo y aéreo con un par de clics.</p>
                            </div>
                            <div className="img_ventaja bot">
                                <img src="https://cdn.shopify.com/assets2/homepage/themes-large-af3b8f6435367fb5ac9b2157b94a120c0ec64759ff690e2cef82016e8eb63d12.png" alt=""/>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="img_ventaja bot">
                            <img src="https://cdn.shopify.com/assets2/homepage/mission-control-large-f57da08db440a20282e2775e483e1973632cd12faed75823564745e821766d5d.png" alt=""/>
                        </div>

                            <div className="ventaja bot">
                                <h2>Servicios simples</h2>
                                <p className="subtitulo">Contrata tu seguro y agente aduanal con un par de clics.
                                </p>
                                <p className="texto">
                                </p>

                            </div>

                        </div>
                        <div className="flex">
                            <div className="ventaja bot">
                                <h2>Pagos simples
                                </h2>
                                <p className="subtitulo">En línea y sin salir de la plataforma.
                                </p>
                                <p className="texto">
                                </p>

                            </div>
                            <div className="img_ventaja bot">
                                <img src="https://cdn.shopify.com/assets2/homepage/themes-large-af3b8f6435367fb5ac9b2157b94a120c0ec64759ff690e2cef82016e8eb63d12.png" alt=""/>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="img_ventaja bot">
                                <img src="https://cdn.shopify.com/assets2/homepage/mission-control-large-f57da08db440a20282e2775e483e1973632cd12faed75823564745e821766d5d.png" alt=""/>
                            </div>

                            <div className="ventaja bot">
                                <h2>Visualízalo todo
                                </h2>
                                <p className="texto">Toda la información de tus envíos
                                    <br />
                                    en una sola cadena de bloques
                                    <br />
                                    de fácil seguimiento.
                                </p>

                            </div>

                        </div>
                    </div>
                    <div className="both">
                        <div className="boxi">
                            <h2 className="titulo bot">Dedícate a hacer crecer tu negocio</h2>
                            <p className="text bot">Nosotros nos encargamos del resto</p>

                                <ul className="lista">
                                    <li className="bot">Envío Terrestre<FontAwesome name='check' className='icon bot' /></li>
                                    <li className="bot">Envío Áereo<FontAwesome name='check' className='icon bot' /></li>
                                    <li className="bot">Envío Marítimo<FontAwesome name='check' className='icon bot' /></li>
                                    <li className="bot">Servicios Aduanales<FontAwesome name='check' className='icon bot' /></li>
                                    <li className="bot">Aseguranza<FontAwesome name='check' className='icon bot' /></li>
                                    <li className="bot">Pago en línea<FontAwesome name='check' className='icon bot' /></li>
                                </ul>

                        </div>
                    </div>
                    <div >
                        <div className='carousel bot'>
                            <OwlCarousel ref="car" options={options}  >
                                <div><img src="https://images.pexels.com/photos/167676/pexels-photo-167676.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="The Last of us"/></div>
                                <div><img src="https://images.pexels.com/photos/418764/pexels-photo-418764.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="GTA V"/></div>
                                <div><img src="https://images.pexels.com/photos/122164/pexels-photo-122164.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="Mirror Edge"/></div>
                                <div><img src="https://images.pexels.com/photos/70418/pexels-photo-70418.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="Mirror Edge"/></div>

                            </OwlCarousel>

                            <button className='btn_slide bot' onClick={() => this.refs.car.prev()}>
                                <FontAwesome name='angle-left' className='icon_about' size='2x'/>
                            </button>
                            <button className='btn_slide bot' onClick={() => this.refs.car.next()}>
                                <FontAwesome name='angle-right' className='icon_about' size='2x'/>
                            </button>
                        </div>
                    </div>
                    <div className="map">
                        <h2 className="bot">Mundi es la plataforma preferida por exportadores
                            <br />
                            e importadores alrededor del mundo</h2>
                       <div className="flex_box">
                            <div className="flex">
                                <div className="data bot">
                                    <h3> Más de 200 </h3>
                                    <p>países</p>
                                </div>
                                <div className="data bot">
                                    <h3> Más de 1000 </h3>
                                    <p>puertos alrededor del mundo</p>
                                </div>
                                <div className="data bot">
                                    <h3> Más de 200,000  </h3>
                                    <p>toneladas diarias</p>
                                </div>
                            </div>
                       </div>
                        <div className="box_coment">
                            <div className="flex">
                                <div className="card bot">
                                    <div className="box_p">
                                        <p>
                                            Estoy increíblemente feliz de gestionar nuestra tienda
                                            en Shopify. Con sus poderosas herramientas y la facilidad
                                            para configurarla, ¡no esperaba que fuera tan divertido
                                            tener una tienda virtual!
                                        </p>
                                    </div>
                                    <div className="box_com">
                                        <div className="photo">

                                        </div>
                                    </div>
                                </div>
                                <div className="card space bot">
                                    <div className="box_p">
                                        <p>
                                            Estoy increíblemente feliz de gestionar nuestra tienda
                                            en Shopify. Con sus poderosas herramientas y la facilidad
                                            para configurarla, ¡no esperaba que fuera tan divertido
                                            tener una tienda virtual!
                                        </p>
                                    </div>
                                    <div className="box_com">
                                        <div className="photo">

                                        </div>
                                    </div>
                                </div>
                                <div className="card bot">
                                    <div className="box_p">
                                        <p>
                                            Estoy increíblemente feliz de gestionar nuestra tienda
                                            en Shopify. Con sus poderosas herramientas y la facilidad
                                            para configurarla, ¡no esperaba que fuera tan divertido
                                            tener una tienda virtual!
                                        </p>
                                    </div>
                                    <div className="box_com">
                                        <div className="photo">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="partners">
                        <h2 className="bot">Partners</h2>
                        <p className="bot">Perfecto para principiantes y expertos por igual</p>
                        <div className="flex box_coment">
                            <div className="partner_box bot">
                                <img src="http://www.dafont.com/forum/attach/orig/1/2/12616.gif" alt=""/>
                            </div>
                            <div className="partner_box bot">
                                <img src="http://www.dafont.com/forum/attach/orig/1/2/12616.gif" alt=""/>
                            </div>
                            <div className="partner_box bot">
                                <img src="http://www.dafont.com/forum/attach/orig/1/2/12616.gif" alt=""/>
                            </div>
                            <div className="partner_box bot">
                                <img src="http://www.dafont.com/forum/attach/orig/1/2/12616.gif" alt=""/>
                            </div>
                            <div className="partner_box bot">
                                <img src="http://www.dafont.com/forum/attach/orig/1/2/12616.gif" alt=""/>
                            </div>
                            <div className="partner_box bot">
                                <img src="http://www.dafont.com/forum/attach/orig/1/2/12616.gif" alt=""/>
                            </div>
                            <div className="partner_box bot">
                                <img src="http://www.dafont.com/forum/attach/orig/1/2/12616.gif" alt=""/>
                            </div>
                            <div className="partner_box bot">
                                <img src="http://www.dafont.com/forum/attach/orig/1/2/12616.gif" alt=""/>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Land;