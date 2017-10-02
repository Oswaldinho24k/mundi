import React, {Component} from 'react';
import './Landing.css';
import { Tabs, Icon } from 'antd';
import FontAwesome from 'react-fontawesome';


const TabPane = Tabs.TabPane;

class Landing extends Component{

    state = {
        tabPosition: 'top',
    }
    changeTabPosition = (tabPosition) => {
        this.setState({ tabPosition });
    }
  
    render(){
        return(
	        <div className='land'>
						<div className="box_inicio">
							<div className="flex">
								<div className="pestana">
									<a href="#somos">
										<p>Quienes somos?</p>
									</a>
								</div>
								<div className="pestana">
									<a href="#historia">
										<p>Historia</p>
									</a>
								</div>
								<div className="pestana">
									<a href="#beneficios">
										<p>Beneficios</p>
									</a>
								</div>
								<div className="pestana">
									<a href="#servicios">
										<p>Servicios</p>
									</a>
								</div>
								<div className="pestana">
									<a href="#contacto">
										<p>Contacto</p>
									</a>
								</div>
							</div>
							<div className="img_box">
							</div>
							<div id="somos" >
							<div className="somos">
								<br />
								<div className="somos_text">
								<h2>QUIENES SOMOS?</h2>
									<hr />
									<p>
										Central Cargo es un Agente de Carga con más de 15 años de experiencia en la industria de
										transporte y logística. A lo largo de estos años, hemos logrado consolidar fuertes
										relaciones de negocio con clientes y proveedores, lo que nos ha permitido mantener
										crecimientos constantes año con año.
									<br />
									<br />
										Somos una empresa joven con una firme orientación al cumplimiento de objetivos. Esta filosofía,
										orientada a la calidad y satisfacción de nuestros clientes, nos ha generado un prestigio muy
										reconocido en este sector que sin duda ha sido parte fundamental del éxito.
									<br />
									<br />
										Como empresa nos caracteriza una visión a futuro, por lo que buscamos reinventar y
										replantearnos la forma de hacer mejor nuestro trabajo. Constantemente nos fijamos
										retos cada vez más altos y esto nos obliga a realizar mejoras continuas e inversiones
										constantes, tanto en infraestructura como en desarrollo del personal.
									</p>
								</div>

							</div>
							</div>
							<div id="historia">
								<br />
								<div className="historia">
									<div className="cubierta">
										<div className="historia_text">
											<h2>Historia</h2>
											<hr />
											<p>
												Central Cargo es un Agente de Carga con más de 15 años de experiencia en la industria de
												transporte y logística. A lo largo de estos años, hemos logrado consolidar fuertes
												relaciones de negocio con clientes y proveedores, lo que nos ha permitido mantener
												crecimientos constantes año con año.
												<br />
												<br />
												Somos una empresa joven con una firme orientación al cumplimiento de objetivos. Esta filosofía,
												orientada a la calidad y satisfacción de nuestros clientes, nos ha generado un prestigio muy
												reconocido en este sector que sin duda ha sido parte fundamental del éxito.
												<br />
												<br />
												Como empresa nos caracteriza una visión a futuro, por lo que buscamos reinventar y
												replantearnos la forma de hacer mejor nuestro trabajo. Constantemente nos fijamos
												retos cada vez más altos y esto nos obliga a realizar mejoras continuas e inversiones
												constantes, tanto en infraestructura como en desarrollo del personal.
											</p>

										</div>
									</div>
								</div>
							</div>
							<div id="beneficios">
								<br/>
								<div className="somos">
									<div className="somos_text">
										<h2>Beneficios</h2>
										<hr />
										<p>
											Ofrecemos soluciones logísticas a la medida y necesidades de nuestros clientes.
										</p>
										<br />
										<div className="flex">
											<div className="bf_box">
												<FontAwesome name='hand-o-up' className='icon' size='2x'/>
												<h4>Más simple</h4>
												<span>Olvida los correos electrónicos y las llamadas telefónicas, exporta,
													importa o enva en un par de clics</span>
											</div>
											<div className="bf_box">
												<FontAwesome name='hand-o-up' className='icon' size='2x'/>
												<h4>Más rápido</h4>
												<span>Cotiza, compara y reserva en tiempo real sin salid de la plataforma</span>
											</div>
											<div className="bf_box">
												<FontAwesome name='hand-o-up' className='icon' size='2x'/>
												<h4>Más barato</h4>
												<span>Te presentamos todo el catálogo de transoprtistas y precios para la ruta que deseas, para que siempre obtengas la mejor tarifa</span>
											</div>


											<div className="bf_box">
												<FontAwesome name='hand-o-up' className='icon' size='2x'/>
												<h4>Todo en una misma plataforma</h4>
												<span>Centraliza y supervisa tus envíos nacionales o internacionales desde la misma plataforma</span>
											</div>
										</div>
									</div>

								</div>
							</div>
							<div id="servicios">
								<br />
							<div className="historia">
								<div className="cubierta">
									<div className="historia_text">
										<h2>Servicios</h2>
										<hr />
										<p>
											Nuestros servicios están orientados a gestionar todos los requerimientos vinculados
											al transporte de sus mercancías. Esto incluye servicio puerta a puerta, seguro y
											traslado de mercancías en las tres modalidades: marítima, terrestre y aérea, además
											de asistencia con todo lo relacionado en materia aduanal.
										</p>
										<div className="flex">
											<div className="bf_box">
												<FontAwesome name='train' className='icon' size="2x" />

												<h4>Terrestre</h4>
												<span>Cotiza tus envíos nacionales e internacionales para carga completa y obten los mejores precios</span>
											</div>
											<div className="bf_box">
												<FontAwesome name='ship' className='icon' size="2x"/>
												<br />
												<h4>Marítimo</h4>

												<span>Envía tu mercancía con el medio de transporte más económico del mundo.</span>
											</div>
											<div className="bf_box">
												<FontAwesome name='plane' className='icon' size="2x" />
												<br />
												<h4>Aéreo</h4>

												<span>Si lo que buscas es rapidez,</span>
											</div>

											<div className="bf_box">
												<FontAwesome name='copy' className='icon' size='2x'/>
												<br />
												<h4>Agentes aduanales</h4>
												<span>Te conectamos con agentes aduanales en todo el mundo para que puedas exportar o importar tu mercancía de la forma más simple posible.</span>

											</div>
											<div className="bf_box">
												<FontAwesome name='lock' className='icon' size='2x'/>
												<br />
												<h4>Seguros</h4>

												<span>Cotiza, compara y contrata el seguro que se adecue a tus necesidades</span>
											</div>
											<div className="bf_box">
												<FontAwesome name='credit-card' className='icon' size='2x'/>
												<br />
												<h4>Pago en línea</h4>

												<span>Paga en línea con tarjeta de crédito, débito o por medio de transferencia eléctronica</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							</div>
							<div id="contacto">
								<br />
							<div className="contacto ">
								<h2>Contacto</h2>
								<hr />
								<div className="flex">
								<div className="map">
									<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.4317555628154!2d-103.45527704953764!3d20.69268500447432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428a92d63bf2c6b%3A0xfe4797a1e0ad9571!2sReto+Zapopan!5e0!3m2!1ses-419!2smx!4v1505772886319" width="600" height="450" ></iframe>
								</div>
								<div className="formu">
									<form method="post" name="sentMessage" action="">
										<div className='formgroup'>
											<div className='inp'>
												<FontAwesome name="user" aria-hidden="true"></FontAwesome>
												<input type="text" name="nombre" className='formcontrol' placeholder="Nombre" id="name" required data-validation-required-message="Porfavor ingresa tu nombre"/>
												<p className="help-block text-danger"></p></div>
										</div>
										<div className='formgroup'>
											<div className='inp'>
												<FontAwesome name='envelope' aria-hidden="true"></FontAwesome>
												<input type="email" name="email" className='formcontrol' placeholder="Email" id="email" required data-validation-required-message="Porfavor ingresa tu e-mail"/>
												<p className="help-block text-danger"></p></div>
										</div>
										<div className='formgroup'>
											<div className='inp'>
												<FontAwesome className="fa fa-phone" aria-hidden="true"></FontAwesome>

												<input type="tel" name="tel" className='formcontrol' placeholder="Teléfono" id="phone" required data-validation-required-message="Porfavor ingresa tu numero telefonico"/>
												<p className="help-block text-danger"></p></div>
										</div>

										<div className='formgroup'>
											<div className='area'>
												<div className='msj'>
													<FontAwesome name="commenting" aria-hidden="true"></FontAwesome></div>

												<textarea type="text" name="msj" className='formcontrol' placeholder="Mensaje" id="message" required data-validation-required-message="Porfavor ingresa tu mensaje"/>
												<p className="help-block text-danger"></p>
											</div>
										</div>
										<div className='formgroup'>
											<button className='btn'>Enviar</button>
											<p className="help-block text-danger"></p>
										</div>

									</form>
								</div>
								</div>
							</div>
							</div>
							<div className="footer">
								<h2>Síguenos en</h2>
								<hr />
								<p>
									Mantente en contacto con nosotros por medio de nuestras diferentes redes sociales.
								</p>
								<div className="flex redes">
									<div className="circle">
										<FontAwesome name='facebook' className='icon_about' size='2x'/>
									</div>
									<div className="circle">
										<FontAwesome name='facebook' className='icon_about' size='2x'/>
									</div>
								</div>
							</div>

					</div>

	        </div>
        );
    }
}

export default Landing;