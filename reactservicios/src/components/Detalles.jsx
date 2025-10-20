import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';

export default class Detalles extends Component {

    url=Global.urlAlumnos;


    detalles=()=>{
        var request="api/alumnos/findalumno/"+this.props.idAl;
        axios.get(this.url+request).then(response=>{
            this.props.mostrar(response.data)
        })
    }

    state={
        alumno:[]
    }
  render() {
    return (
      <div>
        <button onClick={this.detalles}>Detalles</button>
      </div>
    )
  }
}
