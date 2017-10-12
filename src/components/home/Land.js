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
import uno from '../../assets/uno2-01.png';
import dos from '../../assets/dos-01.png';
import tres from '../../assets/tres-01.png';
import cuatro from '../../assets/cuatro-01.png';
import maersk from '../../assets/maersk.gif';
import cat from '../../assets/cat.png';
import air from '../../assets/air.jpg';
import aero from '../../assets/Aero.png';
import able from '../../assets/able.png';
import msc from '../../assets/msc.png';
import apl from '../../assets/apl.png';
import cma from '../../assets/cma.png';

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
                        <p className="texti bot">
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
                                <img src={uno} alt=""/>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="img_ventaja bot">
                            <img src={dos} alt=""/>
                        </div>

                            <div className="ventaja bot">
                                <h2>Despacho aduanal instantáneo
                                </h2>

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
                                <img src={tres} alt=""/>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="img_ventaja bot">
                                <img src={cuatro} alt=""/>
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
                            <p className="texti bot">Nosotros nos encargamos del resto</p>

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
                        <h2 className=" bot">Mundi es la plataforma preferida por exportadores
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
                                            Esta es una oportunidad para lograr que disfrutar esa experiencia,
                                            a través de un amplio catálogo de servios,  buenos precios y facilidad en
                                            el uso de las plataformas, así como las  diversas opciones de
                                            pago principalmente.
                                        </p>
                                    </div>
                                    <div className="box_com azul">
                                        <div className="photo com_uno">

                                        </div>
                                    </div>
                                </div>
                                <div className="card space bot">
                                    <div className="box_p">
                                        <p>
                                            Esta plataforma nos permite tener acceso desde cualquier lugar y a cualquier hora
                                            los 365 días de año. Además de que como usuario tengo la seguridad de realizar compras
                                            online con mi tarjeta de crédito.

                                        </p>
                                    </div>
                                    <div className="box_com naranja">
                                        <div className="photo com_dos">

                                        </div>
                                    </div>
                                </div>
                                <div className="card bot">
                                    <div className="box_p">
                                        <p>
                                            Por medio de mi perfil puedo centralizar todo el proceso de exportación o importación
                                            de mis productos, además de consultar el historial de los mismos de forma estadística
                                            y gráfica.
                                        </p>
                                    </div>
                                    <div className="box_com verde">
                                        <div className="photo com_tres">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="partners">
                        <h2 className="bot ">Partners</h2>
                        <p className="bot ">Perfecto para grandes y pequeños exportadores o importadores</p>
                        <div className="flex box_coment">
                            <div className="partner_box bot">
                                <img src={maersk} alt=""/>
                            </div>
                            <div className="partner_box bot">
                                <img src={cat} alt=""/>
                            </div>
                            <div className="partner_box bot top">
                                <img src={air} alt=""/>
                            </div>
                            <div className="partner_box bot">
                                <img src={aero} alt=""/>
                            </div>
                            <div className="partner_box bot">
                                <img src={able} alt=""/>
                            </div>
                            <div className="partner_box bot">
                                <img src={msc} alt=""/>
                            </div>
                            <div className="partner_box bot">
                                <img src={apl} alt=""/>
                            </div>
                            <div className="partner_box bot">
                                <img src={cma} alt=""/>
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