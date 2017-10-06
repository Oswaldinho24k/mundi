import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import OrderPage from '../pay/OrderPage';

class DetailOrderPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            order:{}
        }
    }
    componentWillReceiveProps(nP){
        console.log(nP)
       let id = nP.match.params.orderId;
        let order = nP.orders.filter(o=> o.key == id )[0];
        this.setState({order})
    }


    render() {
        const order = this.state.order;
        return (
            <div>
                detalle de la orden {order.key}
                
            </div>
        );
    }
}


function mapStateToProps(state, ownProps){
    if (ownProps.match){

        const profile = state.userMain.profile;
        return {
            orders: profile.orders,


        }
    }

}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailOrderPage);

