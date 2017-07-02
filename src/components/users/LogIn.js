import React, {Component} from 'react';
import { Form, Icon, Input,Card,  Button, message, Popover } from 'antd';
import {Link} from 'react-router-dom';
import firebase from '../../firebase';



class PaswordRecover extends Component{
  recover=()=>{
    message.success('Recibiràs un correo para recuperar tu contraseña')
  }
  render(){
    return(
      <div style={{textAlign:'center'}}>
        <Form>
          <Form.Item>
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="email" />
          </Form.Item>
          <Form.Item>
                <Button
                  onClick={this.recover}
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  size="small">
                  Recuperar
                </Button>
          </Form.Item>
        </Form>
      </div>
    );

  }


}

class LogIn extends Component{

  state={
    user:{
      pass:'',
      email:''
    }
  }



  onChange = (e) => {
    let user = this.state.user;
    const field = e.target.name;
    user[field] = e.target.value;
    this.setState({user});
    console.log(this.state.user)
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let mail = this.state.user.email
    let pass = this.state.user.pass
    firebase.auth().signInWithEmailAndPassword(mail, pass).then(()=>{
      message.success('Bienvenido '+ mail)
      this.props.history.push('/')
    }).catch((error)=> {
      message.error('Algo está mal, intenta de nuevo')
    });


  }
  render(){

    return(
      <div style={{padding:'10% 30%', textAlign:'center'}}>
        <Card title="Inicia Sesión">
          <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>

              <Input
                name="email"
                onChange={this.onChange}
                prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="email" />

          </Form.Item>
          <Form.Item>

              <Input
                name="pass"
                onChange={this.onChange}
                prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Contraseña" />

          </Form.Item>
          <Form.Item style={{textAlign:'center'}}>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Iniciar
            </Button><br/>
            <div>
              O <Link to="/register">Regístrate ahora!</Link><br/>
              <Popover
                style={{width:'50%'}}
                content={<PaswordRecover/>}
                title="Escribe tu correo y te ayudaremos" trigger="click">
               <a className="login-form-forgot" href="">Recuperar Contraseña</a>
              </Popover>
            </div>

        </Form.Item>
        </Form>
      </Card>
      </div>
    );
  }
}


export default LogIn;
