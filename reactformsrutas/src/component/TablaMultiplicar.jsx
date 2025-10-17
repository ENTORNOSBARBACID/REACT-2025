import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    cajaNumero=React.createRef()

    tabla=(event)=>{
        event.preventDefault();
        var numero=this.cajaNumero.current.value
        var aux=[];
        for(var i=1; i<=10; i++){
            var resultado= numero * i
            aux.push(resultado);
        }
        this.setState({
            resultados:aux
        })
    }
    state={
        resultados:[]
    }
  render() {
    return (
      <div>
        <h1>Tabla de Multiplicar</h1>
        <form onSubmit={this.tabla}>
            <label>Introduce un numero</label>
            <input type="number" ref={this.cajaNumero}></input>
            <button>Crear tabla</button>
        </form>
        <table>
            <tbody>
                {   
                    this.state.resultados.map((res, index)=>{
                        return (<tr>
                        <td key={index}>{this.cajaNumero.current.value} * {index+1}</td>
                        <td key={index+10}>{res}</td>
                        </tr>)
                    })
                    
                }
            </tbody>
        </table>
    </div>
    )
  }
}
