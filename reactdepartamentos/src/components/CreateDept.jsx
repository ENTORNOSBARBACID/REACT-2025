import React, { Component } from 'react'
import Global from '../Global';
import axios from "axios";
import {Navigate} from "react-router-dom"

export default class CreateDept extends Component {

    cajaId=React.createRef();
    cajanombre=React.createRef();
    cajaDireccion=React.createRef();

    urlD=Global.urlDepartamentos;

    state={
        status:false
    }

    insertDepartamento=(event)=>{
        event.preventDefault()
        var requestD="api/departamentos";

        var departamento={
            numero: Number(this.cajaId.current.value),
            nombre: this.cajanombre.current.value,
            localidad: this.cajaDireccion.current.value
        }

        axios.post(this.urlD+requestD, departamento).then(response=>{
            console.log("Creado");
            this.setState({
                status: true
            })
        })
    }

  render() {
    return (
      <div>
        <h1 style={{color: "red"}}>Crear Departamento:</h1>
        <form onSubmit={this.insertDepartamento}>
            <label>Numero: </label>
            <input type="text" className='form-control' ref={this.cajaId}></input>
            <label>Nombre: </label>
            <input type="text" className='form-control' ref={this.cajanombre}></input>
            <label>Localizacion: </label>
            <input type="text" className='form-control' ref={this.cajaDireccion}></input>
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
