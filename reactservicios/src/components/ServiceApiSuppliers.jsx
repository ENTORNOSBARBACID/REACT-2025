import React, { Component } from 'react'
import axios from "axios"
import Global from '../Global';

export default class ServiceApiSuppliers extends Component {
    cajaid=React.createRef();   
    componentDidMount=()=>{
        this.generateAPI();
        
    }
    
    generateAPI=()=>{
        console.log("Leyendo...");
        axios.get(Global.urlNorthwind).then(response =>{
            this.setState({
                datos:response.data.value
            })
        })
        console.log("Terminado")
    }
    
    buscarID=(event)=>{
        console.log(this.state.datos)
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
                    <li>ID:<b> {this.state.select.SupplierID}</b></li>
                    <li>Company Name:<b> {this.state.select.CompanyName}</b></li>
                    <li>Address: <b>{this.state.select.Address}</b></li>
                    <li>City:<b> {this.state.select.City} </b></li>
                </ul>
            }
        </div>
    )
}
}