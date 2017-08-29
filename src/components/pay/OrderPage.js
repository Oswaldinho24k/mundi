import React from 'react';
import firebase from '../../firebase';
import {Card} from 'antd';
import 'moment/locale/es';
import moment from 'moment';

class OrderPage extends React.Component {

  constructor(){
    super()
    this.props={

    }
  }


  render () {

    return(
      <div>
        <Card title="Resumen de la Orden"  style={{ width: '100%', textAlign:'left' }}>
          <h3>Container: </h3>
            <p>{this.props.busqueda.container}</p>
          <h3>Date: </h3>
            <p>{moment(this.props.busqueda.date).format('LL')}</p>
          <h3>From: </h3>
            <p> {this.props.busqueda.from.nombre}  </p>
          <h3>To: </h3>
            <p>{this.props.busqueda.to.nombre}</p>
          <h3>Quantity:  </h3>
            <p>Chicos=>{this.props.busqueda.quantity.chico}</p>
            <p>Grandes=>{this.props.busqueda.quantity.grande}</p>
          <h3>
            Options:
          </h3>
          <p>Danger=>{this.props.busqueda.options.danger?'Yes':'No'}</p>
          <p>Refri=>{this.props.busqueda.options.refri?'Yes':'No'}</p>
          <p>Detalles=>{this.props.busqueda.options.detalles?'Yes':'No'}</p>
        </Card>
      </div>
    )
  }
}

export default OrderPage;
