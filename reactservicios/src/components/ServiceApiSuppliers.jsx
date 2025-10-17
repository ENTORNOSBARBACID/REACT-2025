import React, { Component } from 'react'
import axios from "axios"

export default class ServiceApiSuppliers extends Component {
    url="https://services.odata.org/V4/Northwind/Northwind.svc/Suppliers"
    cajaid=React.createRef();   
    componentDidMount=()=>{
        this.generateAPI();
    }

    generateAPI=()=>{
        console.log("Leyendo...");
        axios.get(this.url).then(response =>{
            this.setState({
                datos:response.data.value
            })
        })
        console.log("Terminado")
    }

    buscarID=(event)=>{
        event.preventDefault();
        for(var data of this.state.datos){
            if(Number(data.SupplierID)===Number(this.cajaid.current.value)){
                console.log("entro")
                this.setState({
                    select:data
                })
            }
        }
    }

    state={
        datos:"",
        select:""
    }
  render() {
    return (
      <div>
        <h1>ServiceApiSuppliers</h1>
        <form onSubmit={this.buscarID}>
            <label>Inbtroduce ID:</label>
            <input type="text" ref={this.cajaid}></input>
            <button>Buscar ID</button>
        </form>
            {
                this.state.select &&
                <ul>
                    <li>ID: {this.state.select.SupplierID}</li>
                    <li>Address: {this.state.select.Address}</li>
                    <li>City: {this.state.select.City}</li>
                </ul>
            }
        </div>
    )
}
}