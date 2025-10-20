import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {

    state={
        tabla:[]
    }

    generarTablaMultiplicar=()=>{
        let aux=[]

        let numero=Number(this.props.numero);

        for(let i=1; i<=10; i++){
            var resultado = numero * i;
            aux.push(resultado);
        }
        console.log(aux)

        this.setState({
            tabla:aux
        })
    }

    componentDidMount=()=>{
        this.generarTablaMultiplicar();
    }

  render() {
    return (
      <div>
        
      <h3>Numero: {this.props.numero}</h3>
      <ul>
        {
            this.state.tabla.map((i, index)=>{
                return(<li key={index}>{i}</li>)
            })
        }
      </ul>
      </div>
    )
  }
}
