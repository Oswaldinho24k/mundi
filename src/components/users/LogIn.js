import React, {Component} from 'react';
import { Form, Icon, Input,Card,  Button, Checkbox, message, Popover } from 'antd';
import {Link} from 'react-router-dom';



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

  handleSubmit = (e) => {
    e.preventDefault();
      message.success('Bienvenido!')
  }
  render(){

    return(
      <div style={{padding:'10% 30%', textAlign:'center'}}>
        <Card title="Inicia Sesión">
          <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>

              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="email" />

          </Form.Item>
          <Form.Item>

              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Contraseña" />

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
