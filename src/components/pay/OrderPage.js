import React from 'react';
import firebase from '../../firebase';
import {Card} from 'antd';
import 'moment/locale/es';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';

const OrderPage=({order}) => {
    console.log(order);

    return (
        <div>
            <Card style={{marginBottom:'1%'}}>
                ID: {order.key}
            </Card>
            <Card style={{marginBottom:'1%'}}>
                Booking: exportación
            </Card>
            <Card style={{marginBottom:'1%'}}>
                Date: {moment(order.date).format('LL')}
            </Card>
            {/*<Card style={{marginBottom:'1%'}}>
                Peligros: {options.danger?'Yes':'No'}
                Refrigeración: {options.refri?'Yes':'No'}
                Detalles: {options.detalles?'Yes':'No'}
            </Card>
            <Card style={{marginBottom:'1%'}}>
                From: {order.from.nombre}
            </Card>
            <Card style={{marginBottom:'1%'}}>
                To: {order.to.nombre}
            </Card>

            <Card style={{marginBottom:'1%'}}>
                Big: {order.quantity.grande}
                Little: {order.quantity.chico}
            </Card>*/}



        </div>
    );
}

export default OrderPage;
