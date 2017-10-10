import {connect} from 'react-redux';
import {DetailOrderDisplay} from "./DetailOrderDisplay";

function selectorOrder(id, lista){
         return lista.filter(o=> o.key == id )[0];

         //return order;
}

function mapStateToProps(state, ownProps){
    let order = {key:0};
    if(state.userMain.profile){
        const orderId = ownProps.match.params.orderId;
        order = selectorOrder(orderId, state.userMain.profile.orders);
    }
    console.log('la order: ',state.userMain.profile);


    console.log(state.userMain.profile);
    return{
        order,
        user:state.userMain.user,
        profile: state.userMain.profile,
        fetched: state.userMain.profile !== null

    }
}

function mapDispatchToProps(dispatch){

}

export const DetailOrderPage = connect(mapStateToProps, mapDispatchToProps)(DetailOrderDisplay);






// import React, {Component, PropTypes} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as userActions from '../../actions/userActions';
// import {Card, Col, Row} from 'antd';
// import OrderPage from '../pay/OrderPage';
// import FilesPage from './FilesPage';
//
// class DetailOrderPage extends Component {
//     constructor(props, context) {
//         super(props, context);
//         this.state={
//             order:{}
//         }
//     }
//     componentWillReceiveProps(nP){
//         console.log(nP);
//        let id = nP.match.params.orderId;
//         let order = nP.orders.filter(o=> o.key == id )[0];
//         this.setState({order})
//     }
//
//
//     render() {
//         const order = this.state.order;
//         return (
//             <div style={{padding:'2%'}}>
//
//                 <Row>
//                     <Col style={{padding:'1%'}} span="6">
//                        <OrderPage order={order}/>
//                     </Col>
//                     <Col style={{padding:'1%'}} span="18">
//                         <Card>
//                             <FilesPage orderId={order.key}/>
//                         </Card>
//
//                     </Col>
//                 </Row>
//
//             </div>
//         );
//     }
// }
//
//
// function mapStateToProps(state, ownProps){
//     if (ownProps.match){
//
//         const main = state.userMain;
//
//         return {
//             user:main.user,
//             profile:main.profile
//         }
//     }
//
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         userActions: bindActionCreators(userActions, dispatch)
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(DetailOrderPage);

