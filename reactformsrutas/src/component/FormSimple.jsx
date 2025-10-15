import React, { Component } from 'react'

export default class FormSimple extends Component {
  
    cajaNombre=React.createRef();

    peticionFormulario =(event)=>{
        event.preventDefault();
        console.log("Peticion lista¡¡");
        //Para recuperar el valor de un objeto react
        let nombre=this.cajaNombre.current.value;
        console.log(nombre)
    }

    render() {
    return (
      <div>FormSimple
      <form onSubmit={this.peticionFormulario}>
        <label>Nombre</label>
        <input type="text" ref={this.cajaNombre}></input>
        <button>Realizar petición</button>
      </form>
      </div>
    )
  }
}