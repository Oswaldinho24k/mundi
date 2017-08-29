import React from 'react';
import {Tabs, Col, Row, Icon, Upload, Button, message} from 'antd';
import firebase from '../../firebase';

class Files extends React.Component {


  componentWillMount(){

    console.log(this.props.user)
  }

  constructor(){
    super()
    this.state={
        
        nombre:'',
        archivos:{
          factura:'',
        }
      }
  }

  saveDocs=()=>{
    firebase.database().ref('users/'+this.props.user.uid+'/archivos/').set(this.state.archivos).then(r=>{
      message.success('Archivos Guardados')
    }).catch(e=>{
      message.error('Hubo un problema')
    })
  }

  nameUpload=(name)=>{
    this.setState({nombre:name})
  }

  onUpload = (e) => {
  		 const status = e.file.status;
  	    if (status !== 'uploading') {
  	      console.log(e.file, e.fileList);
  	    }
  	    if (status === 'done') {
  	      message.success(`${e.file.name} file uploaded successfully.`);
  	    } else if (status === 'error') {
      	     let storageRef = firebase.storage().ref();
      	     let uploadTask = storageRef.child('docs/' + e.file.name)
      	     .put(e.file.originFileObj);
      	     uploadTask.on('state_changed', (snapshot)=>{

      			 }, (error) => {
        			}, () => {

        			  let downloadURL = uploadTask.snapshot.downloadURL;
                let name = this.state.nombre
        			  let archivos = this.state.archivos;
        			  archivos[name] = downloadURL;
        			  this.setState({archivos});
        			  console.log(this.state.archivos);
                message.success(`${e.file.name} file uploaded successfully.`);
        			})
    	    }
  	};
  render () {
    return(
      <Row style={{textAlign:'center'}}>
        <Col style={{padding:'2%'}} span={8} onClick={()=>this.nameUpload('factura')}>
          <Upload

            onChange={this.onUpload}
            showUploadList={false}>
            <div className="upButton">
              <Icon type="user" style={{fontSize:'2rem'}}/>
              <p>Factura Comercial</p>

            </div>
          </Upload>
        </Col>
        <Col style={{padding:'2%'}} span={8} onClick={()=>this.nameUpload('encargo')}>
          <Upload
            onChange={this.onUpload}
            showUploadList={false}>
            <div className="upButton">
              <Icon type="user" style={{fontSize:'2rem'}}/>
              <p>Encargo Conferido</p>
            </div>
          </Upload>
        </Col>
        <Col style={{padding:'2%'}} span={8} onClick={()=>this.nameUpload('carta')}>
          <Upload
            onChange={this.onUpload}
            showUploadList={false}>
            <div className="upButton">
              <Icon type="user" style={{fontSize:'2rem'}}/>
              <p>Carta al Agente</p>
            </div>
          </Upload>
        </Col>
        <Col style={{padding:'2%'}} span={8} onClick={()=>this.nameUpload('lista')}>
          <Upload
            onChange={this.onUpload}
            showUploadList={false}>
            <div className="upButton">
              <Icon type="user" style={{fontSize:'2rem'}}/>
              <p>Lista de Empaque</p>
            </div>
          </Upload>
        </Col>
        <Col style={{padding:'2%'}} span={8} onClick={()=>this.nameUpload('documento')}>
          <Upload
            onChange={this.onUpload}
            showUploadList={false}>
            <div className="upButton">
              <Icon type="user" style={{fontSize:'2rem'}}/>
              <p>Documento de Transporte</p>
            </div>
          </Upload>
        </Col>
        <Col style={{padding:'2%'}} span={8} onClick={()=>this.nameUpload('certificado')}>
          <Upload
            onChange={this.onUpload}
            showUploadList={false}>
            <div className="upButton">
              <Icon type="user" style={{fontSize:'2rem'}}/>
              <p>Certificado de Origen</p>
            </div>
          </Upload>
        </Col>

        <Button onClick={this.saveDocs}>Guardar</Button>
      </Row>
    )
  }
}

export default Files;
