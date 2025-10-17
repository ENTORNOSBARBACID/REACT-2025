import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class EmpleadoOficio extends Component {
    oficioempleado=React.createRef();

    componentDidMount=()=>{
        this.generarEmpelados();
    }
    
    generarEmpelados=()=>{
        axios.get(Global.urlEmpleados+"api/empleados").then(response =>{
            var oficiosAux=[];
            var empleados=response.data;
            empleados.forEach(emp=>{
            if(!oficiosAux.find(oficioA=>oficioA===emp.oficio)){
                oficiosAux.push(emp.oficio);
            }
            })
            this.setState({
                oficios:oficiosAux
            })
        })
    }
    mostrarOficio=()=>{
        axios.get(Global.urlEmpleados+"api/empleados/empleadosoficio/"+this.oficioempleado.current.value).then(response =>{
            this.setState({
                empleados:response.data
            })
        })
    }

    state={
        oficios: [],
        empleados:[]
    }

  render() {
    return (
      <div>
        <h1>EmpleadoOficio</h1>
        <select ref={this.oficioempleado} onChange={this.mostrarOficio}>
            {
                this.state.oficios.map((emp, index)=>{
                    return(
                        <option key={index} value={emp}>{emp}</option>
                    )
                })
            }
        </select>
        <div>
            {
                this.state.empleados.map((of, index)=>{
                   return <h2>{of.apellido}</h2>
                })
            }
        </div>
        </div>
    )
  }
}
