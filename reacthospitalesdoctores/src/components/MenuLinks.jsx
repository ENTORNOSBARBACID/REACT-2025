import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../Global'
import axios from "axios"

export default class MenuLinks extends Component {
  apiD=Global.apiDoctores;
  apiH=Global.apiHospitales;
  state={
    hospitales:[]
  }

  componentDidMount=()=>{
    this.loadHospitales();
  }

  loadHospitales=()=>{
    let requestH="webresources/hospitales"
    axios.get(this.apiH+ requestH).then(response =>{
      this.setState({
        hospitales: response.data
      })
      })
    
  }

  render() {
    return (
      <div><nav class="navbar navbar-expand-sm bg-dark navbar-dark">
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
          <NavLink className="nav-link" to="/create">Crear hospital</NavLink >
        </li>
        <li class="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">Hospitales</NavLink >
          <ul class="dropdown-menu">
             {
              this.state.hospitales.map((h, index)=>{

                return (<li key={index}><NavLink className="dropdown-item" to={"/doctores/"+h.idhospital}>{h.nombre}</NavLink ></li>)
              })
             }
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>)
  }
}
