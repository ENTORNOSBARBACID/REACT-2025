import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import {NavLink} from "react-router-dom"

export default class JugadorDetail extends Component {
    url=Global.url;
    state={
        jugador:""
    }

    loadJugador=()=>{
        var request="api/jugadores/"+this.props.id;
        axios.get(this.url+request).then(response=>{
            this.setState({
                jugador:response.data
            }) 
            console.log(response.data);
        })
    }
    componentDidMount=()=>{
        this.loadJugador()
    }
  render() {
    return (
      <div className="text-center">
      <h2 className="bg-warning">{this.state.jugador.nombre}</h2>
      <img src={this.state.jugador.imagen}></img>
      <h3 className='m-3'>{this.state.jugador.posicion}</h3>
      <h3 className='m-3'>Fecha de nacimiento: {this.state.jugador.fechaNacimiento}</h3>
      <h3 className='m-3'>Pais:{this.state.jugador.pais}</h3>
      <NavLink to={"/jugadores/"+this.state.jugador.idEquipo} className='btn btn-success'>Jugadores</NavLink>
      </div>
    )
  }
}
