import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import { Button } from 'antd';

import './Footer.css';

class Footer extends Component{
    render(){
        return(
        <div className="footer">
            <div className=" invit">
                <div className="span">
                    <span>¡Comienza a exportar o importar ahora mismo!</span>
                </div>
                <div className="divsi">
                    <Button type="primary">Reservar</Button>
                </div>
            </div>
            <hr />
            <div className="flexi">
                <div className="redes">
                    <span><FontAwesome name='facebook-square' className='icon_redes' size="2x"/></span>
                    <span><FontAwesome name='twitter-square' className='icon_redes' size="2x"/></span>
                    <span><FontAwesome name='linkedin-square' className='icon_redes' size="2x"/></span>
                    <span><FontAwesome name='google-plus-square' className='icon_redes' size="2x"/></span>
                </div>
                <div className="terminos">
                    <span>Términos de servicio</span>
                    <span>Política de privacidad</span>
                </div>
            </div>
        </div>
        );
    }
}

export default Footer;


