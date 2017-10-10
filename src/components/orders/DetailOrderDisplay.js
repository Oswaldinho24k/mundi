/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {Spin, Col, Card, Row} from 'antd';
import OrderPage from '../pay/OrderPage';
import FilesPage from './FilesPage';

export const DetailOrderDisplay = ({user, profile, fetched, order}) => {
    return (
        <div>
            {fetched ?
                <div style={{padding:'2%'}}>

                                     <Row>
                                         <Col style={{padding:'1%'}} span="6">
                                            <OrderPage order={order}/>
                                         </Col>
                                         <Col style={{padding:'1%'}} span="18">
                                             <Card>
                                                 <FilesPage orderId={order.key}/>
                                             </Card>

                                         </Col>
                                     </Row>

                                 </div>
                :
                <Spin/>
            }
        </div>
    );
};

//DetailOrderDisplay.propTypes = {};

const styles = {
    name: {}
};

