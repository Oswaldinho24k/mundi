import React from 'react';
import { AutoComplete, DatePicker } from 'antd';
import moment from 'moment';
import { Checkbox, Radio, Button } from 'antd';
import 'moment/locale/es';
moment.locale('es');

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

function onChange(date, dateString) {
  console.log(date, dateString);
}

const origenes = ['Ciudad de México', 'Zapopan, Jalisco', 'Tlaquepaque, Jalisco', 'Guadalajara Jalisco', 'Zacatecas, Zacatecas'];

const destinos = ['Shangai, China', 'Vancouver, Kanada', 'Tokio, Japon', 'Amsterdam, Holanda', 'Barcelona, España'];

const Avion = () => (
    <div style={{color:'white', padding:'15px'}}>
        <h2 style={{color:'white'}}>Aéreo</h2>
        <div style={styles.divider} />
        
        <p style={{
                width:'30%', 
                display:'inline-block',
                fontSize:'1rem'
            }}>
            
            Embarque él:
        </p>
        <DatePicker
           defaultValue={moment('01-12-2017', 'DD-MM-YYYY')}
           locale={en}
            style={{width:'50%'}}
          onChange={onChange} />
        
           <div style={styles.divider} />
        
        <p style={{
                width:'50%', 
                display:'inline-block',
                fontSize:'1rem'
            }}>
            Origen
        </p>
        <p style={{
                width:'50%', 
                display:'inline-block',
                fontSize:'1rem'
            }}>
            Destino
        </p>
        <AutoComplete
      style={{ width: '50%' }}
      dataSource={origenes}
      placeholder="Escribe el Origen"
      filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
    />
        <AutoComplete
      style={{ width: '50%' }}
      dataSource={destinos}
      placeholder="Escribe el Destino"
      filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
    />
   
    
        
          <div style={styles.divider} />
          <Radio>Solicitar Pedido Especial</Radio>
            <Checkbox onChange={onChange}>Notificarme</Checkbox>
            
             <div style={styles.divider} />
         
            
            <Button 
            style={{backgroundColor:'#66bb6a', margin:'0 auto', width:'100%', height:'40px'}}
            type="dashed">Buscar Reservas</Button>
        
    </div>
    
);

const styles = {
    verde:{
        color:'#66bb6a'
    },
    divider:{
        width:'100%',
        margin:'20px 0 20px 0',
        border:'0.5px solid white'
    }
}

const en = {
  "lang": {
    "placeholder": "Select date",
    "rangePlaceholder": [
      "Start date",
      "End date"
    ],
    "today": "Hoy",
    "now": "Ahora",
    "backToToday": "Volver a Día",
    "ok": "Ok",
    "clear": "Limpiar",
    "month": "Mes",
    "year": "Año",
    "timeSelect": "Select time",
    "dateSelect": "Select date",
    "monthSelect": "Choose a month",
    "yearSelect": "Choose a year",
    "decadeSelect": "Choose a decade",
    "yearFormat": "YYYY",
    "dateFormat": "M/D/YYYY",
    "dayFormat": "D",
    "dateTimeFormat": "M/D/YYYY HH:mm:ss",
    "monthFormat": "MMMM",
    "monthBeforeYear": true,
    "previousMonth": "Previous month (PageUp)",
    "nextMonth": "Next month (PageDown)",
    "previousYear": "Last year (Control + left)",
    "nextYear": "Next year (Control + right)",
    "previousDecade": "Last decade",
    "nextDecade": "Next decade",
    "previousCentury": "Last century",
    "nextCentury": "Next century"
  },
  "timePickerLocale": {
    "placeholder": "Select time"
  }
}

export default Avion;