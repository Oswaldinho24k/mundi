import React, {Component} from 'react';
import firebase from '../../firebase';
import {Spin,Row,Col} from 'antd';
import PaymentForm from '../payment/PaymentForm';


class PayPage extends Component{

    state = {
        searchId:null,
        busqueda:{container:''},
        loading:true

    };

    componentWillMount(){
        const searchId = this.props.match.params.searchId;
        this.setState({searchId});
        console.log(searchId);
        firebase.database().ref('busquedas/' + searchId)
            .once('value', r=>{
                this.setState({busqueda:r.val(), loading:false});
            });
    }

    render(){
        const {busqueda, loading} = this.state;
        return(
            <div style={styles.container}>
                {!loading ? <div>
                    <h1>Pago</h1>
                    <h2>Container: {busqueda.container}</h2>
                </div> : <Spin/>}

                <Row>
                    <Col span={12}>col-12</Col>
                    <Col span={12}><PaymentForm/></Col>
                </Row>
            </div>


        );
    }
}

const styles = {
  container:{
      textAlign:'center'
  }
};

export default PayPage;