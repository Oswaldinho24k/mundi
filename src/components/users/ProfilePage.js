import React, {Component} from 'react';
import {message, Row, Col, Upload, Button, Icon, Modal, Avatar, Card, Tabs, Timeline} from 'antd';
import firebase from '../../firebase';
import './userprofile.css';
import EditProfile from './EditProfileForm';
import {Link} from 'react-router-dom';


const TabPane = Tabs.TabPane;

class UserProfile extends Component{

constructor(){
  super()
  this.state={

      usuario:{
        img:''
      }
    }
}

showModal = () => {
  this.setState({
    visible: true,
  });
}
handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

handleCancel = (e) => {
  console.log(e);
  this.setState({
    visible: false,
  });
}
  componentWillMount(){
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        this.setState({user})
        firebase.database().ref('users/'+user.uid).on('value', (snap)=>{
          this.setState({usuario:snap.val()})
        })
      } else {
        this.props.history.push('/logIn')
        message.error('No puedes estar aqui ;)')
      }
    });
  }
  render(){
    const exportaciones = [{
      id:1,
      productos:5,
      destino:'canadá',
      intermediario:'maersk'
    }, {
      id:2,
      productos:4,
      destino:'japón',
      intermediario:'maersk'
    }, {
      id:3,
      productos:3,
      destino:'méxico',
      intermediario:'maersk'
    }, {
      id:4,
      productos:2,
      destino:'españa',
      intermediario:'maersk'
    }, {
      id:5,
      productos:1,
      destino:'brasil',
      intermediario:'maersk'
    }]
    const imageUrl = this.state.imageUrl;
    return(
      <div style={{padding:'2%'}}>
        <Row>
          <Col style={{padding:'1%'}} span="6">
            <Card>
              <div style={{width:'200px', height:'200px', margin:'0 auto'}}>
                {this.state.usuario.img?
                  <Avatar
                    style={{width:'100%', height:'100%'}}
                    shape="square" size="large"
                    src={this.state.usuario.img} />:
                    <Avatar
                      style={{width:'100%', height:'100%'}}
                      shape="square" size="large"
                      icon={<Icon type="question" style={{ fontSize: 16}}/>} />}
              </div>
              <Timeline style={{marginTop:'10%'}}>
                <Timeline.Item dot={<Icon type="user" style={{ fontSize: '16px' }} />}>Razón Social</Timeline.Item>
                <Timeline.Item dot={<Icon type="mail" style={{ fontSize: '16px' }} />}>Correo</Timeline.Item>
                <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>RFC</Timeline.Item>
                <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Teléfono</Timeline.Item>
              </Timeline>

              <Button type="primary" onClick={this.showModal}>Editar</Button>
              <Modal
                title="Edita tu Perfil"
                visible={this.state.visible}

                onCancel={this.handleCancel}
                footer={null}
              >
                <EditProfile
                  />
              </Modal>
            </Card>
          </Col>
          <Col style={{padding:'2%'}} span="18">
            <Tabs defaultActiveKey="1">
              <TabPane tab="Historial" key="1">
                <Row>
                  {exportaciones.map(exp=>{
                    return(

                      <Col key={exp.id} span={6} style={{padding:'1%'}}>
                      <Link to={'/exportaciones/'+exp.id}>
                        <Card title={exp.id}>

                          <p>intermediario:{exp.intermediario}</p>
                          <p>productos:{exp.productos}</p>
                          <p>destino:{exp.destino}</p>
                        </Card>
                      </Link>
                      </Col>
                    );
                  })}
                </Row>
              </TabPane>
              <TabPane tab="Otros" key="2">Content of Tab Pane 2</TabPane>

            </Tabs>
          </Col>
        </Row>
      </div>
    );
  }
}


export default UserProfile;
