import React, {Component, PropTypes} from 'react';
import {DetailOrderDisplay} from "./DetailOrderDisplay";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as orderActions from '../../actions/orderActions';





function mapStateToProps(state, ownProps){

    return{
        order:state.orders,
        fetched:state.orders !== null,
        user:state.userMain.user,
        match:ownProps.match
    }
}

function mapDispatchToProps(dispatch, ownProps){
        dispatch(orderActions.getSingleOrder(ownProps.match.params.userId, ownProps.match.params.orderId));
    return{
        orderActions:bindActionCreators(orderActions, dispatch)
    }
}

export const DetailOrderAgentPage = connect(mapStateToProps, mapDispatchToProps)(DetailOrderDisplay);