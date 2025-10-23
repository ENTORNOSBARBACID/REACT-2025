import React, { Component } from 'react'
import Global from '../Global';
import axios from "axios";
import { NavLink } from 'react-router-dom';

export default class Details extends Component {
    url=Global.url;
    state={
        equipo:""
    }

    loadEquipo=()=>{
        var request="api/equipos/"+this.props.id;

        axios.get(this.url+request).then(response=>{

            this.setState({
                equipo:response.data
            })
            console.log(response.data)
        }
        )
    }

    componentDidMount=()=>{
        this.loadEquipo()
    }
    componentDidUpdate=(old)=>{
        if(old.id !== this.props.id){
            this.loadEquipo()
        }
    }
  render() {
    return (
      <div><h1 style={{color:"blue"}}>Details of: {this.props.id}</h1>
        <ul className="list-group text-center">
            <li className="list-group-item">{this.state.equipo.idEquipo}</li>
            <li className="list-group-item">{this.state.equipo.nombre}</li>
            <li className="list-group-item"><img src={this.state.equipo.imagen} alt="" style={{height:"150px", width:"250px"}}></img></li>
            <li className="list-group-item">{this.state.equipo.champions}</li>
            <li className="list-group-item">{this.state.equipo.web}</li>
            <li className="list-group-item">{this.state.equipo.descripcion}</li>
            <li className="list-group-item">{this.state.equipo.finalista}</li>
            <li className="list-group-item">
            <NavLink to={"/jugadores/"+this.state.equipo.idEquipo} className="btn btn-success m-1">Jugadores</NavLink>
            <NavLink to="/" className="btn btn-danger m-1">Volver</NavLink>
            </li>
        </ul></div>
    )
  }
}
