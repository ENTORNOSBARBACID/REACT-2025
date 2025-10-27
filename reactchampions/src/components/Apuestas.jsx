import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class Apuestas extends Component {
    url=Global.url
    state={
        apuestas:[]
    }

    componentDidMount=()=>{
        this.loadApuestas()
    }

    loadApuestas=()=>{
       var request="api/apuestas";

        axios.get(this.url+request).then(response=>{
            this.setState({
                apuestas:response.data
            })
            console.log(response.data);
        })
    }
  render() {
    return (
      <div>
        <h1>Apuestas</h1>
        <NavLink to="/crearapuesta" className="btn btn-danger">Crear apuesta</NavLink>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Usuario</th>
                    <th>Resultado</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.apuestas.map((m, index)=>{
                        return(
                            <tr key={index}>
                                <td>{m.usuario}</td>
                                <td>{m.resultado}</td>
                                <td>{m.fecha}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
