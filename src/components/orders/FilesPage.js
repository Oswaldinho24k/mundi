import React from 'react';
import { Col, Row, Icon, Upload, message, Spin} from 'antd';
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
                certificado:'',
                aduanas:''
            },
            uploading:false
        }
    }
    componentWillMount(){
        if(this.props.order.archivos){
            this.setState({archivos:this.props.order.archivos})
        }
    }


    nameUpload=(name)=>{
        this.setState({nombre:name})
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
            }, () => {

                let downloadURL = uploadTask.snapshot.downloadURL;
                let name = this.state.nombre;
                let archivos = this.state.archivos;
                archivos[name] = downloadURL;
                this.setState({archivos});
                console.log(this.state.archivos);
                //message.success(`${e.file.name} cargado con éxito, Guarda al Final`);
                this.props.guardarFiles(this.props.order, this.props.user.uid, this.state.archivos)
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
    render () {
        const order = this.props.order;
        let archivos;
        if(order.archivos===undefined){
            archivos = {}
        }else{
            archivos = this.state.archivos;
        }

        let miusuario = false;
        if(this.props.match.path==='/orders/:orderId'){

            miusuario=true;
        }else{

            if(this.props.user!==null && this.props.match.params.userId===this.props.user.uid){
                miusuario = true;
            }
        }
        return(
            <Row style={{textAlign:'center'}}>
                <div className={this.state.uploading?"spinner_files":"noSpin"}>
                    <Spin size={'large'} />
                </div>
                {!archivos.factura?
                    <Col style={{padding:'2%'}} md={{span:8}} sm={{span:12}} xs={{span:12}} onClick={()=>this.nameUpload('factura')}>
                        <Upload
                            disabled={!miusuario ?true:false}

                            onChange={this.onUpload}
                            showUploadList={false}>
                            <div className={!miusuario ?"upButton no_agente":"upButton"}>
                                <Icon type="file-add" style={{fontSize:'2rem'}}/>
                                <p>Factura Comercial</p>

                            </div>
                        </Upload>
                        <div className="file_extras">
                            <Icon type="file" className="archivo_icon"/>
                             <Icon type="plus-circle"/>

                        </div>
                    </Col>:
                    <Col style={{padding:'2%'}} md={{span:8}} sm={{span:12}} xs={{span:12}} onClick={()=>this.nameUpload('factura')}>
                        <a href={archivos.factura} target="_blank" className="file_link">
                        <div className="file_uploaded">

                            <Icon type="file" className="archivo_icon2"/>

                            <p>Factura Comercial</p>
                        </div>
                    </a>
                        <div className="reupload">
                            <Upload
                                disabled={!miusuario ?true:false}
                                onChange={this.onUpload}
                                showUploadList={false}>
                                <div className={!miusuario ?"upButton re-button no_agente":"upButton re-button"}>
                                    <Icon type="file-add" />
                                </div>
                            </Upload>
                            <div>
                                <Icon type="check-circle" style={{color:'green'}}/>
                            </div>
                        </div>
                    </Col>}
                {!archivos.carta?
                    <Col style={{padding:'2%'}} md={{span:8}} sm={{span:12}} xs={{span:12}} onClick={()=>this.nameUpload('carta')}>
                        <Upload
                            disabled={!miusuario ?true:false}

                            onChange={this.onUpload}
                            showUploadList={false}>
                            <div className={!miusuario ?"upButton no_agente":"upButton"}>
                                <Icon type="file-add" style={{fontSize:'2rem'}}/>
                                <p>Certificado de Origen</p>

                            </div>
                        </Upload>
                        <div className="file_extras">
                            <Icon type="file" className="archivo_icon"/>
                            <Icon type="plus-circle"/>

                        </div>
                    </Col>:
                    <Col style={{padding:'2%'}} md={{span:8}} sm={{span:12}} xs={{span:12}} onClick={()=>this.nameUpload('carta')}>
                        <a href={archivos.carta} target="_blank" className="file_link">
                            <div className="file_uploaded">

                                <Icon type="file" className="archivo_icon2"/>

                                <p>Certificado de Origen</p>
                            </div>
                        </a>
                        <div className="reupload">
                            <Upload
                                disabled={!miusuario ?true:false}
                                onChange={this.onUpload}
                                showUploadList={false}>
                                <div className={!miusuario ?"upButton re-button no_agente":"upButton re-button"}>
                                    <Icon type="file-add" />
                                </div>
                            </Upload>
                            <div>
                                <Icon type="check-circle" style={{color:'green'}}/>
                            </div>
                        </div>
                    </Col>}
                {!archivos.certificado?
                    <Col style={{padding:'2%'}} md={{span:8}} sm={{span:12}} xs={{span:12}} onClick={()=>this.nameUpload('certificado')}>
                        <Upload
                            disabled={!miusuario ?true:false}

                            onChange={this.onUpload}
                            showUploadList={false}>
                            <div className={!miusuario ?"upButton no_agente":"upButton"}>
                                <Icon type="file-add" style={{fontSize:'2rem'}}/>
                                <p>Certificado Fitosanitario</p>

                            </div>
                        </Upload>
                        <div className="file_extras">
                            <Icon type="file" className="archivo_icon"/>
                            <Icon type="plus-circle"/>

                        </div>
                    </Col>:
                    <Col style={{padding:'2%'}} md={{span:8}} sm={{span:12}} xs={{span:12}} onClick={()=>this.nameUpload('certificado')}>
                        <a href={archivos.certificado} target="_blank" className="file_link">
                            <div className="file_uploaded">

                                <Icon type="file" className="archivo_icon2"/>

                                <p>Certificado Fitosanitario</p>
                            </div>
                        </a>
                        <div className="reupload">
                            <Upload
                                disabled={!miusuario ?true:false}
                                onChange={this.onUpload}
                                showUploadList={false}>
                                <div className={!miusuario ?"upButton re-button no_agente":"upButton re-button"}>
                                    <Icon type="file-add" />
                                </div>
                            </Upload>
                            <div>
                                <Icon type="check-circle" style={{color:'green'}}/>
                            </div>
                        </div>
                    </Col>}
                {!archivos.encargo?
                    <Col style={{padding:'2%'}} md={{span:8}} sm={{span:12}} xs={{span:12}} onClick={()=>this.nameUpload('encargo')}>
                        <Upload
                            disabled={!miusuario ?true:false}

                            onChange={this.onUpload}
                            showUploadList={false}>
                            <div className={!miusuario ?"upButton no_agente":"upButton"}>
                                <Icon type="file-add" style={{fontSize:'2rem'}}/>
                                <p>Poliza de Seguro</p>

                            </div>
                        </Upload>
                        <div className="file_extras">
                            <Icon type="file" className="archivo_icon"/>
                            <Icon type="plus-circle"/>

                        </div>
                    </Col>:
                    <Col style={{padding:'2%'}} md={{span:8}} sm={{span:12}} xs={{span:12}} onClick={()=>this.nameUpload('encargo')}>
                        <a href={archivos.encargo} target="_blank" className="file_link">
                            <div className="file_uploaded">

                                <Icon type="file" className="archivo_icon2"/>

                                <p>Poliza de Seguro</p>
                            </div>
                        </a>
                        <div className="reupload">
                            <Upload
                                disabled={!miusuario ?true:false}
                                onChange={this.onUpload}
                                showUploadList={false}>
                                <div className={!miusuario ?"upButton re-button no_agente":"upButton re-button"}>
                                    <Icon type="file-add" />
                                </div>
                            </Upload>
                            <div>
                                <Icon type="check-circle" style={{color:'green'}}/>
                            </div>
                        </div>
                    </Col>}
                {!archivos.documento?
                    <Col style={{padding:'2%'}} md={{span:8}} sm={{span:12}} xs={{span:12}} onClick={()=>this.nameUpload('documento')}>
                        <Upload
                            disabled={!miusuario ?true:false}

                            onChange={this.onUpload}
                            showUploadList={false}>
                            <div className={!miusuario ?"upButton no_agente":"upButton"}>
                                <Icon type="file-add" style={{fontSize:'2rem'}}/>
                                <p>Documento de Transporte</p>

                            </div>
                        </Upload>
                        <div className="file_extras">
                            <Icon type="file" className="archivo_icon"/>
                            <Icon type="plus-circle"/>

                        </div>
                    </Col>:
                    <Col style={{padding:'2%'}} md={{span:8}} sm={{span:12}} xs={{span:12}} onClick={()=>this.nameUpload('documento')}>
                        <a href={archivos.documento} target="_blank" className="file_link">
                            <div className="file_uploaded">

                                <Icon type="file" className="archivo_icon2"/>

                                <p>Documento de Transporte</p>
                            </div>
                        </a>
                        <div className="reupload">
                            <Upload
                                disabled={!miusuario ?true:false}
                                onChange={this.onUpload}
                                showUploadList={false}>
                                <div className={!miusuario ?"upButton re-button no_agente":"upButton re-button"}>
                                    <Icon type="file-add" />
                                </div>
                            </Upload>
                            <div>
                                <Icon type="check-circle" style={{color:'green'}}/>
                            </div>
                        </div>
                    </Col>}
                {!archivos.lista?
                    <Col style={{padding:'2%'}} md={{span:8}} sm={{span:12}} xs={{span:12}} onClick={()=>this.nameUpload('lista')}>
                        <Upload
                            disabled={!miusuario ?true:false}

                            onChange={this.onUpload}
                            showUploadList={false}>
                            <div className={!miusuario ?"upButton no_agente":"upButton"}>
                                <Icon type="file-add" style={{fontSize:'2rem'}}/>
                                <p>Lista de Empaque</p>

                            </div>
                        </Upload>
                        <div className="file_extras">
                            <Icon type="file" className="archivo_icon"/>
                            <Icon type="plus-circle"/>

                        </div>
                    </Col>:
                    <Col style={{padding:'2%'}} md={{span:8}} sm={{span:12}} xs={{span:12}} onClick={()=>this.nameUpload('lista')}>
                        <a href={archivos.lista} target="_blank"  className="file_link">
                            <div className="file_uploaded">

                                <Icon type="file" className="archivo_icon2"/>

                                <p>Lista de Empaque</p>
                            </div>
                        </a>
                        <div className="reupload">
                            <Upload
                                disabled={!miusuario ?true:false}
                                onChange={this.onUpload}
                                showUploadList={false}>
                                <div className={!miusuario ?"upButton re-button no_agente":"upButton re-button"}>
                                    <Icon type="file-add" />
                                </div>
                            </Upload>
                            <div>
                                <Icon type="check-circle" style={{color:'green'}}/>
                            </div>
                        </div>
                    </Col>}
            </Row>
        )
    }
}

export default FilesPage;
