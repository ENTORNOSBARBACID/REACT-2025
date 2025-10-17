import React, { Component } from 'react'
import axios from 'axios'

export default class ServicioApiCustomers extends Component {
  state={
      customers :[]
  }

    //Creamos un metodo para cargar los clientes
    url="https://services.odata.org/V4/Northwind/Northwind.svc/Customers"

    loadCustomers=()=>{
        console.log("Antes del servicio");

        axios.get(this.url).then(response => {
            console.log("Leyendo...")
            //La informacion viene en response.data
            console.log(response.data);
            this.setState({
                customers:response.data.value
            })
        })

        console.log("Terminado de leer");
    }
    componentDidMount = ()=>{
        console.log("Creando componente");
        this.loadCustomers();
    }

    render() {
    return (
      <div>
        <h1>Servicio api customer</h1>
        {
            this.state.customers.map((cliente, index)=>{

                return <h3 style={{color:"blue"}} key={index}>{cliente.ContactName}</h3>
            })
        }
      </div>
    )
  }
}
