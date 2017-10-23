import React, {Component} from 'react';
import {message, Row, Col, Upload, Button, Icon,  Input} from 'antd';
import firebase from '../../firebase';
import './userprofile.css';

/*function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}*/

/*function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}*/


class EditProfile extends Component{
  constructor(){
    super()
    this.state={

        usuario:{
          img:''
        }
      }
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
      	     let uploadTask = storageRef.child('images/' + e.file.name)
      	     .put(e.file.originFileObj);
      	     uploadTask.on('state_changed', (snapshot)=>{

      			 }, (error) => {
        			}, () => {

        			  let downloadURL = uploadTask.snapshot.downloadURL;

        			  let usuario = this.state.usuario;
        			  usuario.img = downloadURL;
        			  this.setState({usuario});
        			  console.log(this.state.usuario);

        			})
    	    }
  	};

    updateUser=()=>{
      firebase.database().ref('users/'+this.state.user.uid).set(this.state.usuario)
      .then(()=>{message.success('Tu perfil se actualizó')})
      .catch(()=>{message.error('Hubo un problema ')})
    };
    componentWillMount(){
      firebase.auth().onAuthStateChanged((user)=> {
        if (user) {
          this.setState({user})
          firebase.database().ref('users/'+user.uid).on('value', (snap)=>{
            this.setState({usuario:snap.val()})
            console.log(this.state.usuario)
          })
        } else {
          this.props.history.push('/logIn')
          message.error('No puedes estar aqui ;)')
        }
      });
    };

    editandoUser=(e)=>{
      let usuario = this.state.usuario
      let field = e.target.name
      usuario[field]=e.target.value
      this.setState({usuario})
      console.log(this.state.usuario)
    }
  render(){
    return(
      <div>
      <Row>
        <Col span={8}>
          <Upload
          multiple={false}
          showUploadList={false}
          onChange={this.onUpload}
         >

            {
              this.state.usuario.img ?
                <img src={this.state.usuario.img}
                  alt="" className="avatar" /> :
                <Icon type="plus" className="avatar-uploader-trigger" />
            }
          </Upload>
        </Col>
        <Col span={16}>
          <Input
            name="rsocial"
           placeholder="Business Name"
           onChange={this.editandoUser} />
          <br/><br/>
          <Input
            name="telefono"
           placeholder="Phone"
           onChange={this.editandoUser} />
          <br/><br/>
          <Input
            name="rfc"
           placeholder="Tax ID"
           onChange={this.editandoUser} />
        </Col>
      </Row>
      <br/>
      <Button onClick={this.updateUser}>Guardar</Button>
      </div>
    );
  }
}

export default EditProfile;
