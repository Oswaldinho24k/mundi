import React from 'react';
import {Input, Form, Icon, Button , Tooltip} from 'antd';
import './paymentForm.css';
const FormItem = Form.Item;

class PaymentForm extends React.Component{

    constructor(){
        super()
        this.state = {
            pago: {}
        }
    }

    handleChange = (e) =>{
        e.preventDefault();
        let pago = this.state.pago;
        let campo = e.target.name;
        pago[campo] = e.target.value;
        console.log(pago);
        this.setState({pago});
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

                <Form className="form">

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

                    <Button type="primary" htmlType="submit" size="large" className="pay-btn">
                        Pagar
                    </Button>

                </Form>
            </div>
        );
    }

}

export default PaymentForm;
