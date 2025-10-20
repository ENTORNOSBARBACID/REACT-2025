import React, { Component } from 'react'
import Global from '../../Global';
import axios from 'axios';

export default class Empleado extends Component {
    
    urlEmp=Global.urlEmpleados;

    loadEmpleados=()=>{
        let idDepartamento=this.props.idDepartamento;
        let requestEmp="api/empleados/empleadosdepartamento/"+idDepartamento;
        axios.get(this.urlEmp+requestEmp).then(response =>{
            this.setState({
                empleados: response.data
            })
            console.log(response.data)
        })
    }
    state={
        empleados:[],
        texto:""
    }
    componentDidUpdate =(oldProps)=>{
        //Dibujamos las nuevas y las antiguas
        console.log("Current: "+this.props.idDepartamento); 
        console.log("Old: "+oldProps.idDepartamento); 
        if(oldProps.idDepartamento != this.props.idDepartamento){
            this.loadEmpleados();
        }
    }
    componentDidMount=()=>{
        this.loadEmpleados()
    }
    render() {
    return (
      <div>
        <h1>Empleados: {this.props.idDepartamento}</h1>
        <h2>{this.state.texto}</h2>
        <ul>
            {
                this.state.empleados.map((emp, index)=>{
                    return(<li key={index}>{emp.apellido} | {emp.oficio} | {emp.departamento}</li>)
                })
            }
        </ul>
      </div>
    )
  }
}
