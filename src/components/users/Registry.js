import React, {Component} from 'react';
import { Form, Input,Card,  Button,message } from 'antd';
import {Link} from 'react-router-dom';
import firebase from '../../firebase';

class Registro extends Component{

  state = {
   confirmDirty: false,
   nuevo:{
     pass:'',
     email:''
   }
 };

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  onChange = (e) => {
		let nuevo = this.state.nuevo;
		const field = e.target.name;
		nuevo[field] = e.target.value;
		this.setState({nuevo});
    console.log(this.state.nuevo)
	};
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }


  handleSubmit = (e) => {
    e.preventDefault();
    let mail = this.state.nuevo.email
    let pass = this.state.nuevo.pass
    let user = this.state.nuevo
    firebase.auth().createUserWithEmailAndPassword(mail, pass).then((res)=>{

      firebase.database().ref('users/'+res.uid).set({email:mail})
      message.success('Registro exitoso')
      this.props.history.push('/')
    }).catch((error)=>{
      message.error('parece que ese correo ya se registró')
    })



  }
  render(){
     const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
     labelCol: {
       xs: { span: 24 },
       sm: { span: 6 },
     },
     wrapperCol: {
       xs: { span: 24 },
       sm: { span: 14 },
     },
   };

    return(
      <div style={{padding:'10% 30%', textAlign:'center'}}>
        <Card
          title="Registro">
          <Form>
                <Form.Item
              {...formItemLayout}
              label="E-mail"
              hasFeedback
            >
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: 'The input is not valid E-mail!',
                }, {
                  required: true, message: 'Please input your E-mail!',
                }],
              })(
                <Input name='email' onChange={this.onChange}/>
              )}
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              label="Password"
              hasFeedback
            >
              {getFieldDecorator('password', {
                rules: [{
                  required: true, message: 'Please input your password!',
                }, {
                  validator: this.checkConfirm,
                }],
              })(
                <Input type="password" />
              )}
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              label="Confirm"
              hasFeedback
            >
              {getFieldDecorator('confirm', {
                rules: [{
                  required: true, message: 'Please confirm your password!',
                }, {
                  validator: this.checkPassword,
                }],
              })(
                <Input type="password" name="pass" onChange={this.onChange} onBlur={this.handleConfirmBlur} />
              )}
            </Form.Item>
            <Form.Item style={{textAlign:'center'}}>
              <Button
                onClick={this.handleSubmit}
                type="primary" htmlType="submit" className="login-form-button">
                Registrarme
              </Button><br/>
            Or <Link to="/logIn">LogIn!</Link>
          </Form.Item>
        </Form>

      </Card>
      </div>
    );
  }
}

const Register = Form.create()(Registro);

export default Register;
