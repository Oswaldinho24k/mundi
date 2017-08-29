import React, {Component} from 'react';
import {message, Row, Col, Upload, Button, Icon, Modal, Avatar, Card, Tabs, Timeline, Collapse} from 'antd';
import firebase from '../../firebase';
import './userprofile.css';
import EditProfile from './EditProfileForm';
import {Link} from 'react-router-dom';
import Files from './Files';
import OrderPage from '../pay/OrderPage';




const Panel = Collapse.Panel;
const TabPane = Tabs.TabPane;

class UserProfile extends Component{

constructor(){
  super()
  this.state={
      user:{},
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
    ]
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
                <Timeline.Item dot={<Icon type="user" style={{ fontSize: '16px' }} />}>{this.state.usuario.rsocial}</Timeline.Item>
                <Timeline.Item dot={<Icon type="mail" style={{ fontSize: '16px' }} />}>{this.state.usuario.email}</Timeline.Item>
                <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>{this.state.usuario.rfc}</Timeline.Item>
                <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>{this.state.usuario.telefono}</Timeline.Item>
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
              <TabPane tab="Record" key="1">

                  {exportaciones.map(exp=>{
                    return(

                      <Collapse defaultActiveKey={['1']} >
                            <Panel header={exp.id} key="1">
                              <Tabs>
                                <TabPane tab="Detail" key="1">
                                <OrderPage busqueda={exp}/>
                                </TabPane>
                                <TabPane tab="Docs" key="2">
                                <Files user={this.state.user}/>
                                </TabPane>
                            </Tabs>
                          </Panel>
                      </Collapse>
                    );
                  })}

              </TabPane>
              <TabPane tab="Other" key="2">Content of Tab Pane 2</TabPane>

            </Tabs>
          </Col>
        </Row>
      </div>
    );
  }
}


export default UserProfile;
