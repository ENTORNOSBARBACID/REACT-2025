import React, { Component } from 'react'
import Global from '../Global';
import axios from "axios"
import { Navigate } from 'react-router-dom';

export default class Update extends Component {

    cajaId=React.createRef();
    cajaMarca=React.createRef();
    cajaModelo=React.createRef();
    cajaConductor=React.createRef();

    url=Global.urlCoches;

    state={
        coche:""
    }

    componentDidMount=()=>{
        this.loadCoche()
    }

    loadCoche=()=>{
        let request="api/coches/findcoche/"+this.props.id;
        axios.get(this.url+request).then(response=>{
            this.setState({
                coche:response.data
            })
            console.log(response.data)
        })
        console.log(this.props.id)
    }

    updateCoche=()=>{
        var requestU="api/coches/updatecoche";

        var cocheUpdate={
            idCoche:Number(this.props.id),
            marca:this.cajaMarca.current.value,
            modelo: this.cajaModelo.current.value,
            conductor: this.cajaConductor.current.value,
            imagen: this.state.coche.imagen
           }
        console.log(cocheUpdate)
        axios.put(this.url+requestU, cocheUpdate).then(response=>{
            console.log("Modificado");
            <Navigate to="/"></Navigate>
        })
    }

  render() {
    return (
      <div>
        <h1 style={{color: "red"}}>Update Car</h1>
            <label>Id Coche: </label>
            <input type="text" className='form-control' defaultValue={this.state.coche.idCoche} ref={this.cajaId} readOnly></input>
            <label>Marca: </label>
            <input type="text" className='form-control' defaultValue={this.state.coche.marca} ref={this.cajaMarca}></input>
            <label>Modelo: </label>
            <input type="text" className='form-control' defaultValue={this.state.coche.modelo} ref={this.cajaModelo}></input>
            <label>Conductor: </label>
            <input type="text" className='form-control' defaultValue={this.state.coche.conductor} ref={this.cajaConductor}></input>
            <button className="btn btn-primary" onClick={this.updateCoche}>Aceptar</button>
      </div>
    )
  }
}
