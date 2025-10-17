import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class Empleados extends Component {

    urlDep=Global.urlDepartamentos;
    urlEmp=Global.urlEmpleados;
    cajaid=React.createRef();
    selectid=React.createRef();

    componentDidMount=()=>{
        this.generarEmpleados();
        this.generarDeptartamentos();
    }
    generarEmpleados=()=>{
        axios.get(this.urlEmp+"api/empleados").then(response =>{
            this.setState({
                empleados:response.data
            })
            console.log(response.data)
        })
    }
    generarDeptartamentos=()=>{
        axios.get(this.urlDep + "webresources/departamentos").then(response =>{
            this.setState({
                departamentos:response.data
            })
            console.log(response.data)

        })
    }
    buscarEmpleados=(event)=>{
        event.preventDefault()
        // let idDept=this.cajaid.current.value;
        let idDept = this.selectid.current.value;
        console.log(this.selectid.current.value)
        let request = "api/empleados/empleadosdepartamento/"+idDept;
        axios.get(this.urlEmp + request).then(response => {
            this.setState({
                select: response.data
            })
            console.log(response.data)
        })
    }


    state={
        empleados:[],
        departamentos:[],
        select:[]
    }

  render() {
    return (
      <div>
        <h1 styple={{color:"red"}}>API empleados/departamentos</h1>
        {/* <form onSubmit={this.buscarEmpleados}>
            <label>Introduzca el ID del departamento: </label>
            <input type="text" ref={this.cajaid}></input>
            <button>Buscar empleados</button>
        </form> */}
        <select ref={this.selectid} onChange={this.buscarEmpleados}>
            <option value="0">Selecciona departamento</option>
            {
                this.state.departamentos.map((dept, index)=>{
                    return <option value={dept.numero} key={index} >{dept.nombre}</option>
                })
            }
        </select>
        {
            this.state.select.map((select, index)=>{
            return (
            <div>
            <h2>{select.apellido}</h2>
            </div>
            )
            })
        }
      </div>
    )
  }
}
