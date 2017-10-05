import React, {Component} from 'react';
import {message, Row, Col, Upload, Button, Icon, Modal, Avatar, Card, Tabs, Timeline, Collapse, Table, Tag} from 'antd';
import firebase from '../../firebase';
import './userprofile.css';
import EditProfile from './EditProfileForm';
import {Link} from 'react-router-dom';
import Files from './Files';
import OrderPage from '../pay/OrderPage';
//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';





const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;

const columns = [ {
    title: 'Pagado',
    dataIndex: 'pagado',
    key: 'pagado',
    render:(p)=>{
        if(p==true){
            return(
                <div>Pagado</div>
            )
        }else{
            return(
                <div>No Pagado</div>
            )
        }

    }
}, {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
},{
    title: 'Origen',
    dataIndex: 'from.nombre',
    key: 'from',
},
    {
        title: 'Destino',
        dataIndex: 'to.nombre',
        key: 'to',
    }];

class UserProfile extends Component{

constructor(){
  super();
  this.state={
    profile:{
      archivos:[],
      orders:[]
    },
      user:{},
      usuario:{
        img:''
      }
    }
};

componentWillReceiveProps(nextProps){
    console.log(nextProps.profile);

    this.setState({profile:nextProps.profile});

}
componentDidMount(){

}


showModal = () => {
  this.setState({
    visible: true,
  });
};
handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

handleCancel = (e) => {
  console.log(e);
  this.setState({
    visible: false,
  });
};

  render(){
    const exportaciones = [
      {
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
    ];
      const perfil = this.state.profile;
    return(
      <div style={{padding:'2%'}}>
        <Row>
          <Col span="6">
            <Card style={{height:'75vh'}}>
              <div style={{width:'200px', height:'200px', margin:'0 auto'}}>
                {perfil.img?
                  <Avatar
                    style={{width:'100%', height:'100%'}}
                    shape="square" size="large"
                    src={perfil.img} />:
                    <Avatar
                      style={{width:'100%', height:'100%'}}
                      shape="square" size="large"
                      icon={<Icon type="question" style={{ fontSize: 16}}/>} />}
              </div>
              <Timeline style={{marginTop:'10%'}}>
                <Timeline.Item dot={<Icon type="user" style={{ fontSize: '16px' }} />}>{perfil.rsocial}</Timeline.Item>
                <Timeline.Item dot={<Icon type="mail" style={{ fontSize: '16px' }} />}>{perfil.email}</Timeline.Item>
                <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>{perfil.rfc}</Timeline.Item>
                <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>{perfil.telefono}</Timeline.Item>
              </Timeline>

              <Button type="primary" onClick={this.showModal}>Editar</Button>
              <Modal
                title="Edita tu Perfil"
                visible={this.state.visible}

                onCancel={this.handleCancel}
                footer={null}
              >
                <EditProfile/>
              </Modal>
            </Card>
              <div style={{display:'flex', justifyContent:'space-around', padding:'3%'}}>
                  <Tag color="blue"><Icon type="up-square" />Exportaciones: 2</Tag>
                  <Tag color="pink"><Icon type="down-square" />Importaciones: 2</Tag>

              </div>
          </Col>
          <Col style={{paddingLeft:'2%'}} span="18">
              <Card style={{height:'80vh'}}>
                <Table dataSource={perfil.orders} columns={columns} />

              </Card>

          </Col>
        </Row>
      </div>
    );
  }
}



function mapStateToProps(state, ownProps){
    return {
        profile: state.userMain.profile
    }
}
function mapDispatchToProps(dispatch){
    return {
        userActions:bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
