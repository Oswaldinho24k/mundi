
import React from 'react';
import {Spin, Col, Card, Row} from 'antd';
import OrderPage from '../pay/OrderPage';
import FilesPage from './FilesPage';

export const DetailOrderDisplay = ({user, profile, fetched, order,orderActions}) => {

    return (
        <div>
            {fetched ?
                <div style={{padding:'1% 2%'}}>

                     <Row>
                         <Col style={{padding:'1%'}} xs={{span:24}} sm={{span:6}} md={{span:6}}>
                            <OrderPage order={order}/>
                         </Col>
                         <Col style={{padding:'1%'}} xs={{span:24}} sm={{span:18}} md={{span:18}}>
                             <Card>
                                 <FilesPage order={order} user={user.uid} guardarFiles={orderActions.saveOrderFiles}/>
                             </Card>
                             <Card style={{marginTop:'1%'}}>
                                 share link
                             </Card>

                         </Col>
                     </Row>

                 </div>
                :
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
                    <Spin size='large'/>
                </div>

            }
        </div>
    );
};

//DetailOrderDisplay.propTypes = {};

const styles = {
    name: {}
};

