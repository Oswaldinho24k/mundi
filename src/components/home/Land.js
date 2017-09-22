/**
 * Created by brendaortega on 22/09/17.
 */
import React, {Component} from 'react';
import './Land.css';
import FontAwesome from 'react-fontawesome';
import { Button } from 'antd';
import OwlCarousel from 'react-owl-carousel2';



class Land extends Component{
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
                        <h2 className="titulo">Una plataforma de comercio
                            <br /> electrónico hecha para ti</h2>
                        <p className="text">
                            Sea que vendas en línea, en las redes sociales,
                            <br />
                            en tu tienda o desde el maletero de tu auto,
                            <br />
                            Shopify puede ayudarte.
                        </p>
                        <Button className='btn_empezar' type="primary" size="large" loading={this.state.loading} onClick={this.enterLoading}>
                           Empezar
                        </Button>
                        <br />
                        <p className="letras">
                            ¿Necesitas ayuda? Ponte en contacto con nosotros
                        </p>
                    </div>
                    <div className="promo">
                        <div className="cubierta">

                            <span>Centraliza tu proceso de exportación o importación en un mismo lugar</span>
                        </div>
                    </div>
                    <div className="beneficios">

                        <div className="flex">
                            <div className="ventaja">
                                <h2>Tu marca, a tu manera</h2>
                                <p className="subtitulo">¡No necesitas ser diseñador gráfico!</p>
                                <p className="texto">Establece tu marca en línea con un dominio
                                    <br />personalizado y una tienda online.
                                    Recibe acceso
                                    <br />instantáneo a cientos de las más hermosas plantillas.
                                </p>

                            </div>
                            <div className="img_ventaja">
                                <img src="https://cdn.shopify.com/assets2/homepage/themes-large-af3b8f6435367fb5ac9b2157b94a120c0ec64759ff690e2cef82016e8eb63d12.png" alt=""/>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="img_ventaja">
                            <img src="https://cdn.shopify.com/assets2/homepage/mission-control-large-f57da08db440a20282e2775e483e1973632cd12faed75823564745e821766d5d.png" alt=""/>
                        </div>

                            <div className="ventaja">
                                <h2>Tu marca, a tu manera</h2>
                                <p className="subtitulo">¡No necesitas ser diseñador gráfico!</p>
                                <p className="texto">Establece tu marca en línea con un dominio
                                    <br />personalizado y una tienda online.
                                    Recibe acceso
                                    <br />instantáneo a cientos de las más hermosas plantillas.
                                </p>

                            </div>

                        </div>
                        <div className="flex">
                            <div className="ventaja">
                                <h2>Tu marca, a tu manera</h2>
                                <p className="subtitulo">¡No necesitas ser diseñador gráfico!</p>
                                <p className="texto">Establece tu marca en línea con un dominio
                                    <br />personalizado y una tienda online.
                                    Recibe acceso
                                    <br />instantáneo a cientos de las más hermosas plantillas.
                                </p>

                            </div>
                            <div className="img_ventaja">
                                <img src="https://cdn.shopify.com/assets2/homepage/themes-large-af3b8f6435367fb5ac9b2157b94a120c0ec64759ff690e2cef82016e8eb63d12.png" alt=""/>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="img_ventaja">
                                <img src="https://cdn.shopify.com/assets2/homepage/mission-control-large-f57da08db440a20282e2775e483e1973632cd12faed75823564745e821766d5d.png" alt=""/>
                            </div>

                            <div className="ventaja">
                                <h2>Tu marca, a tu manera</h2>
                                <p className="subtitulo">¡No necesitas ser diseñador gráfico!</p>
                                <p className="texto">Establece tu marca en línea con un dominio
                                    <br />personalizado y una tienda online.
                                    Recibe acceso
                                    <br />instantáneo a cientos de las más hermosas plantillas.
                                </p>

                            </div>

                        </div>
                    </div>
                    <div className="both">
                        <div className="boxi">
                            <h2 className="titulo">Dedícate a hacer crecer tu negocio</h2>
                            <p className="text">Nosotros nos encargamos del resto</p>

                                <ul className="lista">
                                    <li>Envío Terrestre<FontAwesome name='check' className='icon' /></li>
                                    <li>Envío Áereo<FontAwesome name='check' className='icon' /></li>
                                    <li>Envío Marítimo<FontAwesome name='check' className='icon' /></li>
                                    <li>Servicios Aduanales<FontAwesome name='check' className='icon' /></li>
                                    <li>Aseguranza<FontAwesome name='check' className='icon' /></li>
                                    <li>Pago en línea<FontAwesome name='check' className='icon' /></li>
                                </ul>

                        </div>
                    </div>
                    <div >
                        <div className='carousel '>
                            <OwlCarousel ref="car" options={options}  >
                                <div><img src="https://images.pexels.com/photos/167676/pexels-photo-167676.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="The Last of us"/></div>
                                <div><img src="https://images.pexels.com/photos/418764/pexels-photo-418764.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="GTA V"/></div>
                                <div><img src="https://images.pexels.com/photos/122164/pexels-photo-122164.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="Mirror Edge"/></div>
                                <div><img src="https://images.pexels.com/photos/70418/pexels-photo-70418.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="Mirror Edge"/></div>

                            </OwlCarousel>

                            <button className='btn_slide' onClick={() => this.refs.car.prev()}>
                                <FontAwesome name='angle-left' className='icon_about' size='2x'/>
                            </button>
                            <button className='btn_slide' onClick={() => this.refs.car.next()}>
                                <FontAwesome name='angle-right' className='icon_about' size='2x'/>
                            </button>
                        </div>
                    </div>
                    <div className="map">
                        <h2>Mundi es la plataforma preferida por exportadores
                            <br />
                            e importadores alrededor del mundo</h2>
                       <div className="flex_box">
                            <div className="flex">
                                <div className="data">
                                    <h3> Más de 200 </h3>
                                    <p>países</p>
                                </div>
                                <div className="data">
                                    <h3> Más de 1000 </h3>
                                    <p>puertos alrededor del mundo</p>
                                </div>
                                <div className="data">
                                    <h3> Más de 200,000  </h3>
                                    <p>toneladas diarias</p>
                                </div>
                            </div>
                       </div>
                        <div className="box_coment">
                            <div className="flex">
                                <div className="card">
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
                                <div className="card space">
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
                                <div className="card">
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
                        <h2>Partners</h2>
                        <p >Perfecto para principiantes y expertos por igual</p>
                        <div className="flex">
                            <div className="partner_box">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Land;