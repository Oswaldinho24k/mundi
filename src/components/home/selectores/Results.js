import React, {Component} from 'react';
import {Button, Icon} from 'antd';
import moment from 'moment';
import 'moment/locale/es';





class Results extends Component{

    state = {
        results:[
            {
                id:0,
                carrier:'Maersk',
                sendDate:moment().format("11/09/2013"),
                duration:12,
                arriveDate:moment().format("09/23/2013"),
                price:'23300'
            },
                        {
                id:1,
                carrier:'Maersk',
                sendDate:moment().format("11/09/2013"),
                duration:12,
                arriveDate:moment().format("09/23/2013"),
                price:'23300'
            },
                        {
                id:2,
                carrier:'Maersk',
                sendDate:moment().format("11/09/2013"),
                duration:12,
                arriveDate:moment().format("09/23/2013"),
                price:'23300'
            },
                        {
                id:3,
                carrier:'Maersk',
                sendDate:moment().format("11/09/2013"),
                duration:12,
                arriveDate:moment().format("09/23/2013"),
                price:'23300'
            },
                        {
                id:4,
                carrier:'Maersk',
                sendDate:moment().format("11/09/2013"),
                duration:12,
                arriveDate:moment().format("09/23/2013"),
                price:'23300'
            },            {
                id:5,
                carrier:'Maersk',
                sendDate:moment().format("11/09/2013"),
                duration:12,
                arriveDate:moment().format("09/23/2013"),
                price:'23300'
            },
                        {
                id:6,
                carrier:'Maersk',
                sendDate:moment().format("11/09/2013"),
                duration:12,
                arriveDate:moment().format("09/23/2013"),
                price:'23300'
            }
        ]
    }

    componentWillMount(){
        moment.locale('es');
    }

    render(){
        return(
            <div>
                <table className="tabla-results">
                    <tr>
                        <th>Carrier</th>
                        <th>Fecha de embarque</th>
                        <th>Duración</th>
                        <th>Fecha de llegada</th>
                        <th>USD</th>
                        <th>...</th>
                    </tr>
                    
                        {this.state.results.map(r=>{
                            return(   
                    <tr key={r.id}>                        
                        <td>{r.carrier}</td>
                        <td
                            style={styles.fecha}
                        >{moment(r.sendDate).format("D")}
                            <span style={styles.mes}>
                                {moment(r.sendDate).format("MMM")}
                            </span> </td>
                        <td>{r.duration} Dias</td>
                        <td
                            style={styles.fecha}
                        >{moment(r.arriveDate).format("D")}
                            <span style={styles.mes2}>
                                {moment(r.arriveDate).format("MMM")}
                            </span> </td>
                        <td>$ {r.price}.00</td>
                        <td><Button
                                type="primary"
                                onClick={this.props.click}
                            >Comprar
                            <Icon type="right"/>
                            </Button></td>
                    </tr>
                            );
                        })}
                    
                </table>
            </div>
        );
    }
}

const styles = {
    table:{
        margin:'0 auto',
         border: '1px solid black'
    },
        fecha:{
            fontSize:'.8rem'
        },
        mes:{
            color:"orange",
            paddingLeft:'5px',
            fontSize:'1rem'
        },
        mes2:{
            color:"blue",
            paddingLeft:'5px',
            fontSize:'1rem'
        }
};

export default Results;