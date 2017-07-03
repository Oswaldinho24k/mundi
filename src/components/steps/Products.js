import React, {Component} from 'react';
import { Modal, Button } from 'antd';




class Products extends Component {
  state = {
    loading: false,
    visible: false,
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
  render() {
    const { visible, loading } = this.state;
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
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" size="large" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" size="large" loading={loading} onClick={this.handleOk}>
              Submit
            </Button>,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
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
        color:'blue'
    }
}

export default Products;