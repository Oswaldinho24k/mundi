import React, {Component, PropTypes} from 'react';
import {Row, Col, Icon, Upload, Button, Input, Tooltip, message, Spin, Switch} from 'antd';
import firebase from '../../firebase';
import './files.css'

class Aduanas extends Component{


    state = {
        order:{
            archivos:{
                factura:'',
                encargo:'',
                lista:'',
                carta:'',
                documento:'',
                certificado:'',
                aduanas:''
            },
            nombre:'',
            uploading:false,
            url:''
        }
    }


    componentWillMount(){

        if(this.props.order.archivos){
            this.setState({archivos:this.props.order.archivos})
        }
    }
    componentDidMount(){
        if(this.props.user){
            let url = 'localhost:3000/agente/'+this.props.user.uid+'/'+this.props.order.key;
            this.setState({url})
        }
    }


    nameUpload=(name)=>{
        this.setState({nombre:name});
        console.log(this.state.nombre)
    };


    copyToClip=()=>{
        //this.textInput.select()
        document.querySelector('#input').select();
        document.execCommand("Copy");
        message.success('Link Copiado')
    };
    onChange=()=>{
        let order = this.props.order;
        order.editable = !order.editable;
        this.props.canEdit(order);
        message.warning('Cambiaste el status de edición!')
    };

    onUpload = (e) => {
        const status = e.file.status;
        if (status !== 'uploading') {
            console.log('cargando')
        }
        if (status === 'done') {
            message.success(`${e.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            let storageRef = firebase.storage().ref();
            let uploadTask = storageRef.child('docs/' + this.state.nombre)
                .put(e.file.originFileObj);
            uploadTask.on('state_changed', (snapshot)=>{
                this.setState({uploading:true})
            }, (error) => {
                console.log(error)
            }, () => {

                let downloadURL = uploadTask.snapshot.downloadURL;
                let name = this.state.nombre;
                let archivos = this.state.archivos;
                archivos[name] = downloadURL;
                this.setState({archivos});
                console.log(this.state.archivos);
                //message.success(`${e.file.name} cargado con éxito, Guarda al Final`);
                this.props.guardarFiles(this.props.order, this.props.match.params.userId, this.state.archivos)
                    .then(r=>{
                        this.setState({uploading:false})
                        message.success("se guardó")
                    })
                    .catch(e=>{
                        message.error("No se guardó")
                    })
                ;
            })
        }
    };
    render(){
        const order = this.props.order;
        const user = this.props.user;
        console.log(this.props)
        let miperfil = false;
        if(this.props.match.path==='/orders/:orderId'){
            miperfil=true
        }else{
            miperfil=false
        }
        return (
            <div>
                <div className={this.state.uploading?"spinner_files spinner_file_agent":"noSpin"}>
                    <Spin size={'large'} />
                </div>
                {user === null || (miperfil===false && user.uid!==this.props.match.params.userId) ?
                    <Row>
                        {!order.archivos.aduanas?
                            <Col
                                onClick={()=>this.nameUpload('aduanas')}
                                style={{padding:'2%', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}
                                md={{span:24}} sm={{span:24}} xs={{span:24}}
                            >
                                <Upload

                                    onChange={this.onUpload}
                                    showUploadList={false}>
                                    <div className="upButton">
                                        <Icon type="file-add" style={{fontSize:'2rem'}} className=""/>
                                        <p>Declaración Única de Aduanas</p>

                                    </div>
                                </Upload>
                                <div className="file_extras">
                                    <Icon type="file" className="archivo_icon"/>
                                    <Icon type="plus-circle"/>

                                </div>
                            </Col>:
                            <Col
                                onClick={()=>this.nameUpload('aduanas')}
                                style={{padding:'2%'}} md={{span:24}} sm={{span:24}} xs={{span:24}}>
                                <a href={order.archivos.aduanas} target="_blank" className="file_link">
                                    <div className="file_uploaded">

                                        <Icon type="file" className="archivo_icon2" disabled/>

                                        <p>Declaración Única de Aduanas</p>
                                    </div>
                                </a>
                                <div className="reupload">
                                    <Upload

                                        onChange={this.onUpload}
                                        showUploadList={false}>
                                        <div className="upButton re-button">
                                            <Icon type="file-add" />
                                        </div>
                                    </Upload>
                                    <div>
                                        <Icon type="check-circle" style={{color:'green'}}/>
                                    </div>
                                </div>
                            </Col>}

                    </Row>
                    :
                    <Row>
                        {!order.archivos.aduanas?
                            <Col style={{padding:'2%', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}
                                 md={{span:12}} sm={{span:12}} xs={{span:12}}
                            >
                                <Upload
                                    disabled={true}
                                    onChange={this.onUpload}
                                    showUploadList={false}>
                                    <div className="upButton no_agente">
                                        <Icon type="file-add" style={{fontSize:'2rem'}} className="no_agente"/>
                                        <p>Declaración Única de Aduanas</p>

                                    </div>
                                </Upload>
                                <div className="file_extras">
                                    <Icon type="file" className="archivo_icon"/>
                                    <Icon type="plus-circle"/>

                                </div>
                            </Col>:
                            <Col style={{padding:'2%'}} md={{span:12}} sm={{span:24}} xs={{span:24}}>
                                <a href={order.archivos.aduanas} target="_blank" className="file_link">
                                    <div className="file_uploaded">

                                        <Icon type="file" className="archivo_icon2" disabled/>

                                        <p>Declaración Única de Aduanas</p>
                                    </div>
                                </a>
                                <div className="reupload">
                                    <Upload
                                        disabled={true}
                                        onChange={this.onUpload}
                                        showUploadList={false}>
                                        <div className="upButton re-button no_agente">
                                            <Icon type="file-add" />
                                        </div>
                                    </Upload>
                                    <div>
                                        <Icon type="check-circle" style={{color:'green'}}/>
                                    </div>
                                </div>
                            </Col>}
                        <Col
                            md={{span:12}} sm={{span:24}} xs={{span:24}}>

                            <div className="share_link_cont">
                                <div style={{width:'100%'}}>
                                    <span style={{display:'flex', justifyContent:'space-between', padding:'2%'}}>
                                        <p>Comparte este Link a tu Agente </p>
                                        <Switch
                                            checkedChildren="Editable"
                                            unCheckedChildren="No Editable"
                                            defaultChecked={this.props.order.editable}
                                            onChange={this.onChange}/>
                                    </span>


                                    <Input
                                        id={'input'}
                                        style={{width:'100%'}}
                                        size={'large'}
                                        addonBefore={
                                            <Tooltip placement="top" title={'Copia el Link'}>
                                                <Button
                                                    onClick={this.copyToClip}
                                                    shape="circle"
                                                    size={'small'}><Icon type={'share-alt'}/></Button>
                                            </Tooltip>

                                        }
                                        defaultValue={this.state.url}
                                        value={this.state.url}/>


                                </div>
                            </div>

                        </Col>
                    </Row>}
            </div>
        )
    }
}

export default Aduanas;