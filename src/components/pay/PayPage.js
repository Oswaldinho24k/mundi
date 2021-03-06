import React, {Component} from 'react';
import firebase from '../../firebase';
import {Spin,Row,Col} from 'antd';
import PaymentForm from '../payment/PaymentForm';
import OrderPage from './OrderPage';
import {PaymentConnect} from '../payment/PaymentConnect'


class PayPage extends Component{

    constructor(){
      super()
      this.state = {
          searchId:null,

          loading:true,
          busqueda:{
            container:'Full',
            from:{
              nombre:'Veracruz'
            },
            to:{
              nombre:'Rome'
            },
            quantity:{
              chico:0,
              grande:1
            },
            date:"2017-01-13T00:00:00-06:00",
            options:{
              danger:true,
              detalles:false,
              refri:true
            }
          }

      };
    }

    componentWillMount(){
        const searchId = this.props.match.params.searchId;
        this.setState({searchId});
        console.log(searchId);
        firebase.database().ref('busquedas/' + searchId)
            .once('value', r=>{

                this.setState({busqueda:r.val(), loading:false});
                console.log(this.state.busqueda);
            });
            console.log(this.state.busqueda);
    }

    render(){
        const {busqueda, loading} = this.state;
        return(
            <div style={styles.container}>
                {!loading ? <div>

                </div> : <Spin/>}

                <Row>

                    <Col span={12} style={{padding:'0 8%'}}>
                      <OrderPage
                        bordered={true}
                        order={busqueda}/>

                      </Col>

                    <Col span={12}><PaymentConnect order={this.state.searchId} history={this.props.history}/></Col>

                </Row>
            </div>


        );
    }
}

const styles = {
  container:{
      textAlign:'center',
      paddingTop:'2%'
  }
};

export default PayPage;
