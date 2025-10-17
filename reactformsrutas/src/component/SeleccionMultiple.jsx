import React, { Component } from 'react'

export default class SeleccionMultiple extends Component {
  selectNombre=React.createRef();
  mostrarSeleccionado=(event)=>{
    event.preventDefault();
    var data="";
    let options=this.selectNombre.current.options;
    for (var option of options){
        if(option.selected)
            data+=" | "+option.value +" | "
    }
    this.setState({
        seleccionados:data
    })
  }
  state={
    seleccionados:""
  }
    render() {
    return (
      <div>
        <h1>Selecion multilpe</h1>
        <h2 style={{color:"blue"}}>{this.state.seleccionados}</h2>
        <form onSubmit={this.mostrarSeleccionado}>
            <select size="7" multiple ref={this.selectNombre}>
                <option>Elemento 1</option>
                <option>Elemento 2</option>
                <option>Elemento 3</option>
                <option>Elemento 4</option>
                <option>Elemento 5</option>
                <option>Elemento 6</option>
            </select>
            <button>Mostrar selecionados</button>
        </form>
      </div>
    )
  }
}