import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';

export default class Hospitales extends Component {
    
    state={
        hospitales:[]
    }

    urlH=Global.apiHospitales;

    loadHospitales=()=>{
        let request="webresources/hospitales"

        axios.get(this.urlH+request).then(response=>{
            console.log("Loading hospitales...");
            this.setState({
                hospitales:response.data
            })
            console.log(response.data);
        })
    }

    componentDidMount=()=>{
        this.loadHospitales()
    }
  
    render() {
    return (
      <div>
        <h1>Hospitales</h1>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Direccion</th>
                    <th>Telefono</th>
                    <th>Camas</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.hospitales.map((h, index)=>{
                        return(<tr>
                            <td>{h.idhospital}</td>
                            <td>{h.nombre}</td>
                            <td>{h.direccion}</td>
                            <td>{h.telefono}</td>
                            <td>{h.camas}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>

      </div>
    )
  }
}
