import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import ProfilePage from './ProfilePage';

function mapStateToProps(state, ownProps){

    return{
        profile:state.userMain.profile,
        fetched:state.userMain.profile !== null
    }
}

function mapDispatchToProps(dispatch){

}



export const ProfileInfo = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);