import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class Jugadores extends Component {
    url=Global.url
    state={
        jugadores:[]
    }

    componentDidMount=()=>{
        this.loadJugadores()
    }

    loadJugadores=()=>{
        var request="api/jugadores/jugadoresequipos/"+this.props.id;
        axios.get(this.url+request).then(response=>{
            this.setState({
                jugadores:response.data
            })
            console.log(response.data)
        })
    }
  render() {
    return (
      <div>
        <h1 className='text-info m-2'>Jugadores</h1>
        <NavLink to={"/details/"+this.props.id} className="btn btn-danger m-4">Volver</NavLink>
        <table class="table table-bordered text-center">
            <thead>
                <tr>
                    <th>Id jugador</th>
                    <th>Nombre</th>
                    <th>Posicion</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.jugadores.map((j, index)=>{
                        return(<tr key={index}>
                            <td>{j.idJugador}</td>
                            <td>{j.nombre}</td>
                            <td>{j.posicion}</td>
                            <td><img src={j.imagen} alt=""></img></td>
                            <td><NavLink to={"/jugadordetails/"+j.idJugador} className="btn btn-warning">Detalles</NavLink></td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
