import React, { Component } from 'react'

export default class TablaMultiplicar2 extends Component {
    

    generarNum=()=>{
        var aux=[]
        var numero="";
        for(var i=0; i<=10; i++){
            numero=parseInt(Math.random()*100)+1
            aux.push(numero);
        }
        return aux
    }

    aleatorio=this.generarNum()

    tabla=(event)=>{
        event.preventDefault();
        var numero=document.getElementById("aleatorio").value;
        console.log(numero)
        var aux=[];
        for(var i=1; i<=10; i++){
            var resultado= numero * i
            aux.push(resultado);
        }
        this.setState({
            resultados:aux,
            numeroA:numero
        })
    }
    state={
        resultados:[],
        numeroA:0
    }
  render() {
    return (
      <div>
        <h1>Tabla de Multiplicar</h1>
        <select id="aleatorio" onChange={this.tabla}>
            <option value="-1">Seleccinar numero</option>
        {
            this.aleatorio.map((num, index)=>{
                return(<option key={index} value={num}>{num}</option>)
            })
        }
        </select>
        <table>
            <tbody>
                {   this.state.numeroA != -1 &&
                    this.state.resultados.map((res, index)=>{
                        return (<tr>
                        <td key={index}>{this.state.numeroA} * {index+1}</td>
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
