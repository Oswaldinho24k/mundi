import React from 'react';
import {Input, Form, Icon, Button , Tooltip , Modal, message} from 'antd';
import './paymentForm.css';
import LogInNonBack from '../users/LoginNonBack';
import firebase from '../../firebase';


const FormItem = Form.Item;


class PaymentForm extends React.Component{

    constructor(props){
        super()
        this.state = {
            pago: {},
            visible: false,
        }
    }

    showModal = () =>{
        this.setState({visible:true})
    }


    componentWillMount(){
        firebase.auth().onAuthStateChanged((user)=> {
        if (user) {
            this.setState({user})
            firebase.database().ref('users/'+user.uid).on('value', (snap)=>{
            this.setState({usuario:snap.val()})
            })
        }
        });
        console.log(this.state.user)
    }


    handleChange = (e) =>{
        e.preventDefault();
        let pago = this.state.pago;
        let campo = e.target.name;
        pago[campo] = e.target.value;
        console.log(pago);
        this.setState({pago});
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

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.history.push("/userprofile");
        message.success("Yo've successfully paid")

    }


    render(){

        const Info = () => (
        <div className="cvc-preview-container two-card">
            <div className="amex-cvc-preview"></div>
            <div className="visa-mc-dis-cvc-preview"></div>
        </div>
        );

        return(
            <div className="pay-container">
                <div className="header">
                    Enter your payment information
                </div>
                <div className="cards-available">
                    <span className="visa"></span>
                    <span className="mastercard" ></span>
                    <span className="american"></span>
                </div>

                <Form className="form" onSubmit={this.handleSubmit}>

                    <FormItem
                    className="form-item half"
                    label="Name on Card">
                        <Input name="client" onChange={this.handleChange}/>
                    </FormItem>

                    <FormItem
                    className="form-item half"
                    label="Card number">
                        <Input name="card" onChange={this.handleChange}/>
                    </FormItem>

                    <FormItem
                    className="form-item quarter"
                    label="Exp. Month">
                        <Input name="month" onChange={this.handleChange}/>
                    </FormItem>

                    <FormItem
                    className="form-item quarter"
                    label="Exp. Year">
                        <Input name="year" onChange={this.handleChange}/>
                    </FormItem>

                    <FormItem
                    className="form-item quarter"
                    label="Security Number">
                        <Input addonAfter={<Tooltip placement="top" title={<Info/>}><Icon type="question-circle" /></Tooltip>} name="security" onChange={this.handleChange}/>
                    </FormItem>

                    <FormItem
                    className="form-item quarter"
                    label="Zip">
                        <Input name="zip" onChange={this.handleChange}/>
                    </FormItem>

                    <Button type="primary" htmlType="submit" size="large" className="pay-btn" disabled={this.state.user !== undefined ? false:true}>
                        Pagar
                    </Button>

                    <Button type="primary" htmlType="button" size="large" className="pay-btn" onClick={this.showModal} disabled={this.state.user === undefined?false:true}>
                        LogIn
                    </Button>

                </Form>

                <Modal
                title="Login"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}>
                    <LogInNonBack/>
                </Modal>

            </div>
        );
    }

}

export default PaymentForm;