import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class CreateApuesta extends Component {
    cajaNombre=React.createRef();
    cajaRes=React.createRef();
    cajaDate=React.createRef();

    url=Global.url;
    
    state={
        status:false
    }

    crearApuesta=(event)=>{
        event.preventDefault()
        var request="api/apuestas";

        var newApuesta={
            idApuesta:0,
            usuario:this.cajaNombre.current.value,
            resultado:this.cajaRes.current.value,
            fecha:this.cajaDate.current.value
        }

        axios.post(this.url+request,newApuesta).then(response =>{
            console.log("apuesta creada");
            this.setState({
                status:true
            })
        })
    }
  render() {
    return (
      <div>
        <h1>Crear Apuesta</h1>
        <form onSubmit={this.crearApuesta}>
            <label>Introduce usuario</label>
            <input type="text" className="form-control" ref={this.cajaNombre}></input>
            <label>Introduce resultado</label>
            <input type="text" className="form-control" ref={this.cajaRes}></input>
            <label>Introduce fecha</label>
            <input type="date" className="form-control" ref={this.cajaDate}></input>
            <button className='btn btn-warning'>Crear apuesta</button>
        </form>
        {
            this.state.status&&
            <Navigate to="/apuestas"></Navigate>
        }
      </div>
    )
  }
}
