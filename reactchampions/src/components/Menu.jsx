import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import Global from '../Global'
import axios from "axios";

export default class Menu extends Component {

    url=Global.url;
    state={
        equipos:[]
    }

    loadEquipos=()=>{
        var request="api/equipos"

        axios.get(this.url+request).then(response=>{
            this.setState({
                equipos:response.data
            })

        }
        )
    }
    componentDidMount=()=>{
        this.loadEquipos()
    }

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <NavLink className="navbar-brand" to="#">Logo</NavLink >
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink >
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/apuestas">Apuestas</NavLink >
        </li>
        <li class="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">Equipos</NavLink >
          <ul class="dropdown-menu">
             {
              this.state.equipos.map((e, index)=>{

                return (<li key={index}><NavLink className="dropdown-item" to={"/details/"+e.idEquipo}>{e.nombre}</NavLink ></li>)
              })
             }
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}
