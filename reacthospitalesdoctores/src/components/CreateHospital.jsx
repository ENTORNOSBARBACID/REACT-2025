import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class CreateHospital extends Component {
    cajaNombre=React.createRef();
    cajaId=React.createRef();
    cajaDireccion=React.createRef();
    cajaTelefono=React.createRef();
    cajaCamas=React.createRef();
    url=Global.apiHospitales;

    state={
        mensaje:null
    }

    insertHospital=(event)=>{
        event.preventDefault();
        let request="webresources/hospitales/post";
        let cajaid=Number(this.cajaId.current.value);
        let cajanombre=this.cajaNombre.current.value;
        let cajadireccion=this.cajaDireccion.current.value;
        let cajatelefono=this.cajaTelefono.current.value;
        let cajacamas=Number(this.cajaCamas.current.value);

        let newHospital={
            idhospital:cajaid,
            nombre:cajanombre,
            direccion:cajadireccion,
            telefono:cajatelefono,
            camas:cajacamas
        }

        axios.post(this.url + request, newHospital).then(response =>{
            this.setState({
                mensaje:"Hospital "+cajaid+" insertado"
            })
        }
        )
    }

  render() {
    return (
      <div>
        <h1 style={{color: "red"}}>Crear Hospital:</h1>
        <form onSubmit={this.insertHospital}>
            <label>Id Hospital</label>
            <input type="text" className='form-control' ref={this.cajaId}></input>
            <label>Nombre: </label>
            <input type="text" className='form-control' ref={this.cajaNombre}></input>
            <label>Direccion: </label>
            <input type="text" className='form-control' ref={this.cajaDireccion}></input>
            <label>Telefono: </label>
            <input type="text" className='form-control' ref={this.cajaTelefono}></input>
            <label>Camas: </label>
            <input type="text" className='form-control' ref={this.cajaCamas}></input><br></br>
            <button className="btn btn-primary">Aceptar</button>
        </form>
        {this.state.mensaje&&
            <h3 className='text-success'>{this.state.mensaje}</h3>
        }
      </div>
    )
  }
}
