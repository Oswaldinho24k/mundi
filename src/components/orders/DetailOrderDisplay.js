
import React from 'react';
import {Spin, Col, Card, Row} from 'antd';
import OrderPage from '../pay/OrderPage';
import FilesPage from './FilesPage';
import Aduanas from './Aduanas';

export const DetailOrderDisplay = ({user, profile, fetched, order,orderActions, match}) => {
    let miperfil = false;
    if(match.path==='/orders/:orderId'){
        miperfil=true
    }else{
        miperfil=false
    }
    return (
        <div>
            {fetched ?
                <div style={{padding:'1% 2%'}}>
                    {!order.editable && (user === null || (miperfil===false && user.uid!==this.props.match.params.userId))  ?
                        <div className="cant-edit-order">
                            <h2>Este envío  ya no puede editarse.</h2>
                            <p>Contacta al dueño del envío si aún necesitas modificarla</p>
                        </div>:
                        <Row>
                            <Col style={{padding:'1%'}} xs={{span:24}} sm={{span:6}} md={{span:6}}>
                                <OrderPage order={order}/>
                            </Col>
                            <Col style={{padding:'1%'}} xs={{span:24}} sm={{span:18}} md={{span:18}}>
                                <Card>
                                    <FilesPage order={order} user={user} guardarFiles={orderActions.saveOrderFiles} match={match}/>
                                </Card>
                                <Card style={{marginTop:'1%'}}>

                                    <Aduanas
                                        match={match}
                                        order={order}
                                        user={user}
                                        guardarFiles={orderActions.saveAgentFiles}
                                        canEdit={orderActions.canEditOrder}
                                    />
                                </Card>

                            </Col>
                        </Row>
                    }
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

