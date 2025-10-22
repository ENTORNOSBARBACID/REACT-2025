import React, { Component } from 'react'
import {Navigate} from "react-router-dom"
import Global from '../Global';
import axios from "axios";

export default class UpdateDept extends Component {

  url=Global.urlDepartamentos;
  cajaId=React.createRef()
  cajanombre=React.createRef()
  cajaDireccion=React.createRef()

  state={
    status:false
  }

  updateDepartamento=(event)=>{
    event.preventDefault();
    var requestD="api/departamentos"
    var newDept={
      numero: Number(this.cajaId.current.value),
      nombre: this.cajanombre.current.value,
      localidad: this.cajaDireccion.current.value
    }
    console.log(newDept)
    
    axios.put(this.url+requestD, newDept).then(response=>{
      this.setState({
        status:true
      })
      
    console.log("entro")
    })
  }
  render() {
    return (
      <div>
        <h1 style={{color: "red"}}>Modificar Departamento:</h1>
        <form onSubmit={this.updateDepartamento}>
            <label>Numero: </label>
            <input type="text" className='form-control' defaultValue={this.props.numero} ref={this.cajaId} readOnly></input>
            <label>Nombre: </label>
            <input type="text" className='form-control' defaultValue={this.props.nombre} ref={this.cajanombre}></input>
            <label>Localizacion: </label>
            <input type="text" className='form-control' defaultValue={this.props.localidad} ref={this.cajaDireccion}></input><br></br>
            <button className="btn btn-primary">Aceptar</button>
        </form>
        {
            this.state.status&&
            <Navigate to="/"></Navigate>
        }
      </div>
    )
  }
}
