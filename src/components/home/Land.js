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

            loop:true,
            margin:0,
            responsiveClass:true,
            autoplay: true,
            responsive:{
                0:{
                    items:1,

                },
                600:{
                    items:2,

                },
                1000:{
                    items:3,


                }
            }

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
                            <br />Desde unas cuantas cajas, hasta un contenedor.
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
                                <p className="texto">Contrata tu transporte terrestre, marítimo y aéreo desde la misma plataforma
                                    y con sólo un par de clics. Tan fácil como oprimir un botón, selecciona origen, destino, fecha
                                    y listo te presentamos todas las opciones disponibles con precios en tiempo real para que elijas
                                    la que más se acomoda a tus necesidades. </p>
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
                                <h2>Despacho aduanal instantáneo
                                </h2>
                                <p className="subtitulo">Contrata tu agente aduanal con un par de clics.
                                </p>
                                <p className="texto">
                                    Olvídate del despacho. En Mundi el despacho de mercancías es tan sencillo como presionar un botón, olvídate de estar mandando documentos por correo electrónico, con Mundi todo es más simple.
                                </p>

                            </div>

                        </div>
                        <div className="flex">
                            <div className="ventaja bot">
                                <h2>Seguros simples
                                </h2>

                                <p className="texto">
                                    Contratar el seguro de tu mercancía nunca fue tan sencillo. Ponemos a tu alcance todo el catálogo de aseguradoras y sus coberturas para que puedas comparar y contratar en tiempo real sin salir de la plataforma.

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
                                <h2>Pagos simples

                                </h2>
                                <p className="texto">Con Mundi puedes pagar en línea todo tipo de transporte y servicios, un solo portal, una sola factura y un solo pago. Y si quieres pagar todo por separado, no te preocupes, recuerda que en Mundi todo es posible. Transparencia total durante todo el trayecto.
                                </p>

                            </div>

                        </div>
                    </div>
                    <div className="both">
                        <div className="boxi">
                            <h2  className="titulo bot">Visualízalo todo
                            </h2>
                            <br />
                            <p className="subtitulo bot">
                                Toda la información de tus envíos en una sola cadena de bloques de fácil seguimiento. Cuántos envíos has realizado, a qué destinos, qué productos, a qué clientes, qué tipo de transporte y cuánto has pagado por ello, consulta los documentos, pagos y todo lo necesario desde un solo lugar.
                            </p>
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
                                    <h3> Más de 100 </h3>
                                    <p>países</p>
                                </div>
                                <div className="data bot">
                                    <h3> Más de 100 </h3>
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
                        <p className="bot">Perfecto para grandes y pequeños exportadores o importadores</p>
                        <div className="flex box_coment">
                            <div className="partner_box bot">
                                <img src="http://www.dafont.com/forum/attach/orig/1/2/12616.gif" alt=""/>
                            </div>
                            <div className="partner_box bot">
                                <img src="https://vectorise.net/logo/wp-content/uploads/2015/12/Logo-Cathay-Pacific-Cargo2.png" alt=""/>
                            </div>
                            <div className="partner_box bot top">
                                <img src="https://www.afklcargo.com/DK/common/img/logo_Without_FMP.jpg" alt=""/>
                            </div>
                            <div className="partner_box bot">
                                <img src="http://www.facturaticket.mx/wp-content/uploads/2015/09/AeroMexico-Cargo-Facturacion-Logo.png" alt=""/>
                            </div>
                            <div className="partner_box bot">
                                <img src="http://www.ablefreight.com/wp-content/uploads/2013/11/Able-Freihgt-Logotype-Complete.png" alt=""/>
                            </div>
                            <div className="partner_box bot">
                                <img src="https://15378-presscdn-0-14-pagely.netdna-ssl.com/wp-content/uploads/2015/05/msc.png" alt=""/>
                            </div>
                            <div className="partner_box bot">
                                <img src="https://upload.wikimedia.org/wikipedia/en/c/c6/APL_logo.png" alt=""/>
                            </div>
                            <div className="partner_box bot">
                                <img src="https://www.cma-cgm.com/static/Communication/ImgAboutUs/Logo_CMACGM_page-evenement-3.png" alt=""/>
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