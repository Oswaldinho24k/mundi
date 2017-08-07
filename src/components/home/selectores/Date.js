import React, {Component} from 'react';
import { Calendar, Alert } from 'antd';
import moment from 'moment';
import 'moment/locale/es';
import es from 'antd/lib/locale-provider/es_ES';




moment.locale('es');

class Date extends Component{

state = {
    value: moment('2017-01-25'),
    selectedValue: moment('2017-01-25'),
  }
  onSelect = (value) => {
    this.setState({
      value,
      selectedValue: value,
    });
    this.props.click();
  }
  onPanelChange = (value) => {
    this.setState({ value });
  }

    render(){
        console.log(es)
        const { value, selectedValue } = this.state;
    return (
      <div 
        style={styles.container}
        className={this.props.class}>
        <h2>Selecciona la Fecha:</h2>
        <Calendar
            locale={es.Calendar}
             fullscreen={false} 
             value={value} 
             onSelect={this.onSelect} 
             onPanelChange={this.onPanelChange} />
      </div>
    );
    }
}


const styles = {
    container: {
        paddingTop:'20px',
        width:'100%', 
        margin:'0 auto'
    }
}


export default Date;