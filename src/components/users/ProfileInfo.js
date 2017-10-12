import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import ProfilePage from './ProfilePage';
import {bindActionCreators} from 'redux';

function mapStateToProps(state, ownProps){
    console.log(state, ownProps)
    return{
        user:state.userMain.user,
        profile:state.userMain.profile,
        fetched:state.userMain.profile !== null,

    }
}

function mapDispatchToProps(dispatch){

}



export const ProfileInfo = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);