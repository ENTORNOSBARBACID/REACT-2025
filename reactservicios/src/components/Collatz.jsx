import React, { Component } from 'react'

export default class Collatz extends Component {

    generarCollatz=()=>{
        let numero=parseInt(this.props.numero);
        let aux=[];
        console.log(this.props.numero);
        while(numero != 1){
            if(numero%2==0){
                numero=numero/2
            }
            else{
                numero=numero*3+1
            }
            aux.push(numero);
        }

        this.setState({
            numeros:aux
        })
    }
    state={
        numeros:[]
    }
    componentDidMount=()=>{
        this.generarCollatz();
    }
  render() {
    return (
    <>
        <h1>Conjetura de Collatz numero: {this.props.numero}</h1>
        <ul>
            {
                this.state.numeros.map((numero, index)=>{
                    return (<li key={index}>{numero}</li>)
                })
            }
        </ul>
    </>    
    )
        }
    }