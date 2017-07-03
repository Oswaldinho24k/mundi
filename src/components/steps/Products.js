import React, {Component} from 'react';
import { Modal, Button, Input } from 'antd';




class Products extends Component {
  state = {
    loading: false,
    visible: false,
      products:[],
      nuevo:{nombre:'', peso:''}
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }
  
  
  onChange = (e) => {
      let nuevo = this.state.nuevo;
      const field = e.target.name;
      nuevo[field] = e.target.value;
      this.setState({nuevo});
  };

    agregar = () => {
    this.setState({ loading: true });
        this.props.agregar(this.state.nuevo);
    this.setState({ loading: false, visible: false });
        
 };
  
  render() {
    
    const { visible, loading, products } = this.state;
      
    return (
      <div>

       
        <Button
            style={styles.add}
           type="primary" 
           icon="plus"
           onClick={this.showModal}>
          Agregar Producto
        </Button>
        
        
        <Modal
          visible={visible}
          title="Nuevo Producto"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" size="large" onClick={this.handleCancel}>Cancelar</Button>,
            <Button key="submit" type="primary" size="large" loading={loading} onClick={this.agregar}>
              Agregar
            </Button>,
          ]}
        >
         <p>
            <input
             name="nombre"
              placeholder="Nombre del producto"
              onChange={this.onChange}
          /> 
         </p>
          
          <p>
            <input
            type="number"
             name="peso"
              placeholder="Peso"
              onChange={this.onChange}
          />  
          </p>
          

        </Modal>
      </div>
    );
  }
}

const styles = {
    add:{
        width:200,
        height:200,
        border:'1px dotted blue',
        backgroundColor:'transparent',
        color:'blue',
        marginBottom:50
    }
}

export default Products;