import React, {Component} from 'react';
import {Tabs, Col, Row, Icon, Upload, Button, message} from 'antd';
import './exportaciones.css';

const TabPane = Tabs.TabPane;



class ExpDetail extends Component{

  onChange(info) {
   if (info.file.status !== 'uploading') {
     console.log(info.file, info.fileList);
   }
   if (info.file.status === 'done') {

   } else if (info.file.status === 'error') {
    console.log(info.file.name)
    message.success(`${info.file.name} cargó correctamente`);
   }
 }
  render(){
    return(
      <div style={{padding:'2% 10%'}}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Resúmen" key="1">
            <Row>
              <h2>Generales</h2>
              <Col span={8}>
                <p><strong>Salida: </strong>Guadalajara, México</p>
                <p><strong>Destino: </strong>Beiging, China</p>
                <p><strong>T/T: </strong>21 Días</p>
                <p><strong>Contenedor: </strong> 40FT refer</p>
                <p><strong>ETD: </strong>22-nov-2017</p>
                <p><strong>ETA: </strong>16-dic-2017</p>
                <p><strong>Peso Neto(Kg): </strong>20000</p>
                <p><strong>Peso Bruto(Kg): </strong>22000</p>
                <p><strong>Paquetes: </strong>20</p>
              </Col>
              <Col span={8}>
                <p><strong>Producto: </strong>Aguacate</p>
                <p><strong>Hs Código: </strong>08014040</p>
                <p><strong>#Contenedores: </strong>1</p>
                <p><strong>Atmosfera Controlada: </strong><Icon type="check-circle"/></p>
                <p><strong>Sistema de AC: </strong>Starfresh</p>
                <p><strong>Temperatura C: </strong>5</p>
                <p><strong>%CO2: </strong>5</p>
                <p><strong>%O2: </strong>5</p>
                <p><strong>Volumen: </strong>60</p>
              </Col>
              <Col span={8}>
                <p><strong>Documento yxyx: </strong><Icon type="check-circle"/></p>
                <p><strong>Documento xyxyx: </strong><Icon type="close-circle"/></p>
                <p><strong>Documento xyxyx: </strong><Icon type="check-circle"/></p>
                <p><strong>Documento xyxyx: </strong><Icon type="close-circle"/></p>
                <p><strong>Documento xyxyx: </strong><Icon type="check-circle"/></p>
                <p><strong>Documento xyxyx: </strong><Icon type="close-circle"/></p>
                <p><strong>Documento xyxyx: </strong><Icon type="check-circle"/></p>
                <p><strong>Documento xyxyx: </strong><Icon type="close-circle"/></p>
                <p><strong>Documento xyxyx: </strong><Icon type="check-circle"/></p>
              </Col>
            </Row>
            <hr/>
            <Row>

              <Col span={12}>
                <h2>Detalles</h2>
                <p><strong>Export: </strong><Icon type="check-circle"/></p>
                <p><strong>Import: </strong><Icon type="close-circle"/></p>
                <p><strong>Destino Final: </strong>MASDIHJK</p>
                <p><strong>Domicilio de Recolección: </strong>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p><strong>Domicilio de Entrega: </strong>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p><strong>Fcha y Hora de Recolección: </strong>18-nov-2017</p>
              </Col>

              <Col span={12}>
                <h2>Partes del Envío</h2>
                <p><strong>Exportador: </strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p><strong>Notify: </strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p><strong>Consognatorio: </strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p><strong>Comentarios: </strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Documentación" key="2">
            <Row style={{textAlign:'center'}}>
              <Col style={{padding:'2%'}} span={8}>
                <Upload
                  onChange={this.onChange}
                  showUploadList={false}>
                  <div className="upButton">
                    <Icon type="user" style={{fontSize:'2rem'}}/>
                    <p>Factura Comercial</p>

                  </div>
                </Upload>
              </Col>
              <Col style={{padding:'2%'}} span={8}>
                <Upload
                  onChange={this.onChange}
                  showUploadList={false}>
                  <div className="upButton">
                    <Icon type="user" style={{fontSize:'2rem'}}/>
                    <p>Encargo Conferido</p>
                  </div>
                </Upload>
              </Col>
              <Col style={{padding:'2%'}} span={8}>
                <Upload
                  onChange={this.onChange}
                  showUploadList={false}>
                  <div className="upButton">
                    <Icon type="user" style={{fontSize:'2rem'}}/>
                    <p>Carta al Agente</p>
                  </div>
                </Upload>
              </Col>
              <Col style={{padding:'2%'}} span={8}>
                <Upload
                  onChange={this.onChange}
                  showUploadList={false}>
                  <div className="upButton">
                    <Icon type="user" style={{fontSize:'2rem'}}/>
                    <p>Lista de Emoaque</p>
                  </div>
                </Upload>
              </Col>
              <Col style={{padding:'2%'}} span={8}>
                <Upload
                  onChange={this.onChange}
                  showUploadList={false}>
                  <div className="upButton">
                    <Icon type="user" style={{fontSize:'2rem'}}/>
                    <p>Documento de Transporte</p>
                  </div>
                </Upload>
              </Col>
              <Col style={{padding:'2%'}} span={8}>
                <Upload
                  onChange={this.onChange}
                  showUploadList={false}>
                  <div className="upButton">
                    <Icon type="user" style={{fontSize:'2rem'}}/>
                    <p>Certificado de Origen</p>
                  </div>
                </Upload>
              </Col>

              <Button>Guardar</Button>
            </Row>
          </TabPane>
          <TabPane tab="Otros" key="3">
            lola
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
export default ExpDetail;
