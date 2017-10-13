import React, {Component, PropTypes} from 'react';
import {Spin} from 'antd';

const DetailOrderAgent =({order, fetched})=> {
    console.log(order)
    return (
        <div>
            {
                fetched?
                    <p>component</p>
                    :
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
                        <Spin size='large'/>
                    </div>
            }
        </div>
    )
}


export default DetailOrderAgent;