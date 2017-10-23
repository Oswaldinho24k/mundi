import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import PaymentForm from "./PaymentForm";

function mapStateToProps(){

}

function mapDispatchToProps(){

}

export const PaymentConnect = connect(mapStateToProps, mapDispatchToProps)(PaymentForm);