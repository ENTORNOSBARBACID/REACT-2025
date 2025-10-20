import React, { Component } from 'react'
import Empleado from './Empleado'
import Global from '../../Global';
import axios from 'axios';
export default class Departamento extends Component {
    selectDepartamento=React.createRef();
  
    urlDept=Global.urlDepartamentos;
    requestDept="webresources/departamentos";

    componentDidMount=()=>{
        this.loadDept();
    }

    loadDept=()=>{
        axios.get(this.urlDept+this.requestDept).then(response=>{
            this.setState({
                departamentos:response.data
            })
        })
        console.log("Datos leidos")
    }

    mostrarEmpleados=(event)=>{
        event.preventDefault();
        let idDepart=this.selectDepartamento.current.value;
        this.setState({
            idDepartamento:idDepart
        })
    }

    state={
        departamentos:[],
        idDepartamento:""
    }
    render() {
    return (
      <div>
        <h1>Departamentos</h1>
        <select ref={this.selectDepartamento} onChange={this.mostrarEmpleados}>
            <option value="-1">Selecciona departamento</option>
        {
            this.state.departamentos.map((dept, index)=>{
                return(<option key={index} value={dept.numero}>{dept.nombre}</option>)
            })
        }
        </select>
        {
            this.state.idDepartamento !=-1 & this.state.idDepartamento !="" &&
                <Empleado idDepartamento={this.state.idDepartamento}></Empleado>
        }
        </div>
    )
  }
}
