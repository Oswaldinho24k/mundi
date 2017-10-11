import React from 'react';
import {Tabs, Col, Row, Icon, Upload, Button, message} from 'antd';
import firebase from '../../firebase';
import './files.css';

class FilesPage extends React.Component {


    constructor(){
        super();
        this.state={

            nombre:'',
            archivos:{
                factura:'',
                encargo:'',
                lista:'',
                carta:'',
                documento:'',
                certificado:''
            }
        }
    }
    componentWillMount(){
        if(this.props.order.archivos){
            this.setState({archivos:this.props.order.archivos})
        }
    }

    saveDocs=()=>{
        this.props.guardarFiles(this.props.order, this.props.user, this.state.archivos).then(()=>{
            message.success('Tus archivos se agregaron a la orden!')
        })
    }

    nameUpload=(name)=>{
        this.setState({nombre:name})
    };

    onUpload = (e) => {
        const status = e.file.status;
        if (status !== 'uploading') {
            console.log(e.file, e.fileList);
        }
        if (status === 'done') {
            message.success(`${e.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            let storageRef = firebase.storage().ref();
            let uploadTask = storageRef.child('docs/' + this.state.nombre)
                .put(e.file.originFileObj);
            uploadTask.on('state_changed', (snapshot)=>{

            }, (error) => {
            }, () => {

                let downloadURL = uploadTask.snapshot.downloadURL;
                let name = this.state.nombre;
                let archivos = this.state.archivos;
                archivos[name] = downloadURL;
                this.setState({archivos});
                console.log(this.state.archivos);
                message.success(`${e.file.name} cargado con éxito, Guarda al Final`);
            })
        }
    };
    render () {
        const order = this.props.order;
        let archivos;
        if(order.archivos==undefined){
            archivos = {}
        }else{
            archivos = this.state.archivos;
        }
        return(
            <Row style={{textAlign:'center'}}>
                <Col style={{padding:'2%'}} md={{span:8}} sm={{span:12}} xs={{span:12}} onClick={()=>this.nameUpload('factura')}>
                    <Upload

                        onChange={this.onUpload}
                        showUploadList={false}>
                        <div className="upButton">
                            <Icon type="file-add" style={{fontSize:'2rem'}}/>
                            <p>Factura Comercial</p>

                        </div>
                    </Upload>
                    <div className="file_extras">

                        <a disabled={archivos.factura?false:true} href={archivos.factura} target="_blank">
                            <Icon type="file" className="archivo_icon"/>
                        </a>

                        {archivos.factura?<Icon type="check-circle" style={{color:'green'}}/>:<Icon type="plus-circle"/>}
                    </div>
                </Col>
                <Col style={{padding:'2%'}} md={{span:8}} sm={{span:12}} xs={{span:12}} onClick={()=>this.nameUpload('encargo')}>
                    <Upload
                        onChange={this.onUpload}
                        showUploadList={false}>
                        <div className="upButton">
                            <Icon type="file-add" style={{fontSize:'2rem'}}/>
                            <p>Encargo Conferido</p>
                        </div>
                    </Upload>
                    <div className="file_extras">

                        <a disabled={archivos.encargo?false:true} href={archivos.encargo} target="_blank">
                            <Icon type="file" className="archivo_icon"/>
                        </a>
                        {archivos.encargo?<Icon type="check-circle" style={{color:'green'}}/>:<Icon type="plus-circle"/>}
                    </div>
                </Col>
                <Col style={{padding:'2%'}} md={{span:8}} sm={{span:12}} xs={{span:12}} onClick={()=>this.nameUpload('carta')}>
                    <Upload
                        onChange={this.onUpload}
                        showUploadList={false}>
                        <div className="upButton">
                            <Icon type="file-add" style={{fontSize:'2rem'}}/>
                            <p>Carta al Agente</p>
                        </div>
                    </Upload>
                    <div className="file_extras">

                        <a disabled={archivos.carta?false:true} href={archivos.carta} target="_blank">
                            <Icon type="file" className="archivo_icon"/>
                        </a>
                        {archivos.carta?<Icon type="check-circle" style={{color:'green'}}/>:<Icon type="plus-circle"/>}
                    </div>
                </Col>
                <Col style={{padding:'2%'}} md={{span:8}} sm={{span:12}} xs={{span:12}} onClick={()=>this.nameUpload('lista')}>
                    <Upload
                        onChange={this.onUpload}
                        showUploadList={false}>
                        <div className="upButton">
                            <Icon type="file-add" style={{fontSize:'2rem'}}/>
                            <p>Lista de Empaque</p>
                        </div>
                    </Upload>
                    <div className="file_extras">

                        <a disabled={archivos.lista?false:true} href={archivos.lista} target="_blank">
                            <Icon type="file" className="archivo_icon"/>
                        </a>
                        {archivos.lista?<Icon type="check-circle" style={{color:'green'}}/>:<Icon type="plus-circle"/>}
                    </div>
                </Col>
                <Col style={{padding:'2%'}} md={{span:8}} sm={{span:12}} xs={{span:12}} onClick={()=>this.nameUpload('documento')}>
                    <Upload
                        onChange={this.onUpload}
                        showUploadList={false}>
                        <div className="upButton">
                            <Icon type="file-add" style={{fontSize:'2rem'}}/>
                            <p>Documento de Transporte</p>
                        </div>
                    </Upload>
                    <div className="file_extras">

                        <a disabled={archivos.documento?false:true} href={archivos.documento} target="_blank">
                            <Icon type="file" className="archivo_icon"/>
                        </a>
                        {archivos.documento?<Icon type="check-circle" style={{color:'green'}}/>:<Icon type="plus-circle"/>}
                    </div>
                </Col>
                <Col style={{padding:'2%'}} md={{span:8}} sm={{span:12}} xs={{span:12}} onClick={()=>this.nameUpload('certificado')}>
                    <Upload
                        onChange={this.onUpload}
                        showUploadList={false}>
                        <div className="upButton">
                            <Icon type="file-add" style={{fontSize:'2rem'}}/>
                            <p>Certificado de Origen</p>
                        </div>
                    </Upload>
                    <div className="file_extras">

                        <a disabled={archivos.certificado?false:true} href={archivos.certificado} target="_blank">
                            <Icon type="file" className="archivo_icon"/>
                        </a>
                        {archivos.certificado?<Icon type="check-circle" style={{color:'green'}}/>:<Icon type="plus-circle"/>}
                    </div>
                </Col>

                <Button onClick={this.saveDocs}>Guardar</Button>
            </Row>
        )
    }
}

export default FilesPage;
