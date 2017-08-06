import React, {Component} from 'react';
import './Landing.css';
import logo from '../../assets/mundi.png';
import { Tabs, Icon } from 'antd';
import FontAwesome from 'react-fontawesome';

const TabPane = Tabs.TabPane;

class Landing extends Component{

  
    render(){
        return(
	        <div className='land'>
	  			<div className='about'>
	  				<div className='log'>
	  					<img src={logo}/>
	  				</div>
	  				<div className='text_about'>
	  					<p>
	  						Mundi es una plataforma que te ofrece Mundi es una plataforma que te ofrece Mundi es una plataforma que te ofrece
	  						Mundi es una plataforma que te ofrece Mundi es una plataforma que te ofrece Mundi es una plataforma que te ofrece
	  						Mundi es una plataforma que te ofrece Mundi es una plataforma que te ofrece Mundi es una plataforma que te ofrece
	  						Mundi es una plataforma que te ofrece Mundi es una plataforma que te ofrece Mundi es una plataforma que te ofrece
	  						Mundi es una plataforma que te ofrece Mundi es una plataforma que te ofrece Mundi es una plataforma que te ofrece	
	  					</p>
	  				</div>
	  			</div>
	        	 <Tabs defaultActiveKey="1" className='tab'>
				    <TabPane tab={<h3><Icon type="gift" />Beneficios</h3>} key="1">
				    <div className='flex'>
				    <div className='section_lan'>
				    	<h4>Más simple</h4>
				    	<hr className='linea'/>
		  				<p>Olvida los correos electrónicos y las llamadas 
		  				telefónicas, exporta, importa o enva en un par de clics</p>	
				    </div>
				    <div className='section_lan'>
				    	<h4>Más rápido</h4>
				    	<hr className='linea'/>
		  				<p>Cotiza, compara y reserva en tiempo real sin salid de la plataforma</p>
				    </div>
		  	
		  			<div className='section_lan'>
				    	<h4>Más barato</h4>
				    	<hr className='linea'/>
		  				<p>Te presentamos todo el catálogo de transoprtistas y precios para la ruta que deseas, para que siempre obtengas la mejor tarifa</p>
				    </div>
				    <div className='section_lan'>
				    	<h4>Todos tus envíos en una plataforma</h4>
				    	<hr className='linea_dos'/>
		  				<p>Centraliza y supervisa tus envíos nacionales o internacionales desde la misma plataforma</p>
				    </div>

		       		</div>
				    </TabPane>
				    
				  </Tabs>
				   <Tabs defaultActiveKey="1" className='tab'>
				    <TabPane tab={<h3><Icon type="contacts" />Servicios</h3>} key="1">
				    <div className='flex'>
				    <div className='section_serv'>
				    	<FontAwesome name='train' className='icon_about' />
				    	<br/>
				    	<h4>Terrestre</h4>
				    	<hr className='linea'/>
		  				<p>Cotiza tus envíos nacionales e internacionales para carga completa y obten los mejores precios</p>	
				    </div>
				    <div className='section_serv'>
				      	<FontAwesome name='ship' className='icon_about' />
				    	<br />
				    	<h4>Marítimo</h4>
				    	<hr className='linea'/>
		  				<p>Envía tu mercancía con el medio de transporte más económico del mundo.</p>
				    </div>
		  	
		  			<div className='section_serv'>
		  				<FontAwesome name='plane' className='icon_about' />
				    	<br />
				    	<h4>Aéreo</h4>
				    	<hr className='linea'/>
		  				<p>Si lo que buscas es rapidez,</p>
				    </div>
				    <div className='section_serv'>
				    <FontAwesome name='copy' className='icon_about' size='2x'/>
				    	<br />
				    	<h4>Agentes aduanales</h4>
				    	<hr className='linea_dos'/>
		  				<p>Te conectamos con agentes aduanales en todo el mundo para que puedas exportar o importar tu mercancía de la forma más simple posible.</p>
				    </div>
				    <div className='section_serv'>
				     <FontAwesome name='lock' className='icon_about' size='2x'/>
				    	<br />
				    	<h4>Seguros</h4>
				    	<hr className='linea'/>
		  				<p>Cotiza, compara y contrata el seguro que se adecue a tus necesidades</p>
				    </div>
				    <div className='section_serv'>
				     <FontAwesome name='credit-card' className='icon_about' size='2x'/>
				    	<br />
				    	<h4>Pago en línea</h4>
				    	<hr className='linea'/>
		  				<p>Paga en línea con tarjeta de crédito, débito o por medio de transferencia eléctronica</p>
				    </div>

		       		</div>
				    </TabPane>
				    
				  </Tabs>
				  <Tabs defaultActiveKey="1" className='tab'>
				    <TabPane tab={<h3><Icon type="contacts" />Aliados</h3>} key="1">
				    <div className='flex'>
				    <div className='section_partners'>
				    	<div className='caja'>
				    		<img className='partner_img' src='https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Maersk_Oil_logo.svg/1135px-Maersk_Oil_logo.svg.png'/>
				    	</div>
				    	<hr className='linea'/>
		  				<p>Maersk</p>	
				    </div>
				     <div className='section_partners'>
				    	<div className='caja'>
				    		<img className='partner_img' src='http://cmacgm-log.com/sites/default/files/20170217E_CMA%20CGM%20LOG_logo_RGB.png'/>
				    	</div>
				    	<hr className='linea'/>
		  				<p>CMA CGM LOG</p>	
				    </div>
				     <div className='section_partners'>
				    	<div className='caja'>
				    		<img className='partner_img' src='https://upload.wikimedia.org/wikipedia/en/c/c6/APL_logo.png'/>
				    	</div>
				    	<hr className='linea'/>
		  				<p>APL</p>	
				    </div>
				     <div className='section_partners'>
				    	<div className='caja'>
				    		<img className='partner_img' src='https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Msc_cruises_logo.svg/1280px-Msc_cruises_logo.svg.png'/>
				    	</div>
				    	<hr className='linea'/>
		  				<p>MSC</p>	
				    </div>
				     <div className='section_partners'>
				    	<div className='caja'>
				    		<img className='partner_img' src='http://www.barrenecheasoc.mx/img/logo_nos_barrenechea.png'/>
				    	</div>
				    	<hr className='linea'/>
		  				<p>Barrenechea Sucesores S.C.</p>	
				    </div>
				    <div className='section_partners'>
				    	<div className='caja'>
				    		<img className='partner_img' src='http://beforeitsnews.com/contributor/upload/6664/images/Able%20Freight%20Logo.jpg'/>
				    	</div>
				    	<hr className='linea'/>
		  				<p>Able Freight</p>	
				    </div>
				     <div className='section_partners'>
				    	<div className='caja'>
				    		<img className='partner_img' src='http://www.facturaticket.mx/wp-content/uploads/2015/09/logo-aeromexico-cargo-e1441310437694.jpg'/>
				    	</div>
				    	<hr className='linea'/>
		  				<p>AeroMexico Cargo</p>	
				    </div>
				     <div className='section_partners'>
				    	<div className='caja'>
				    		<img className='partner_img' src='data:image/png;base64,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'/>
				    	</div>
				    	<hr className='linea'/>
		  				<p>Air France Cargo</p>	
				    </div>
				     <div className='section_partners'>
				    	<div className='caja'>
				    		<img className='partner_img' src='https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Maersk_Oil_logo.svg/1135px-Maersk_Oil_logo.svg.png'/>
				    	</div>
				    	<hr className='linea'/>
		  				<p>Maersk</p>	
				    </div>
				     <div className='section_partners'>
				    	<div className='caja'>
				    		<img className='partner_img' src='https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Maersk_Oil_logo.svg/1135px-Maersk_Oil_logo.svg.png'/>
				    	</div>
				    	<hr className='linea'/>
		  				<p>Maersk</p>	
				    </div>

		       		</div>

				    </TabPane>
				    
				  </Tabs>
	        </div>
        );
    }
}

export default Landing;