import React, { Component } from 'react'
import Global from '../Global'
import axios from "axios"
import imagen from "../assets/images/bb.jpg"
import {NavLink} from "react-router-dom"

export default class Home extends Component {

    state={
        status:true,
        departamentos:null
    }

    urlD=Global.urlDepartamentos;

    loadDepartamentos=()=>{
        let request="api/departamentos"
        axios.get(this.urlD+request).then(response=>{
            this.setState({
                departamentos:response.data,
                status:false
            })
            console.log(response.data)
        })
    }
    deleteDepartamento=(id)=>{
       var requestDelete="api/departamentos/"+id;

       axios.delete(this.urlD + requestDelete).then(response=>{
        console.log("delete");
        this.loadDepartamentos()
       })
    }

    componentDidMount=()=>{
        this.loadDepartamentos()
    }

  render() {
    return (
     <div className='text-center'>
        {
            this.state.status&&
            <img src={imagen} alt="" style={{width: "700px", height: "650px"}} className='m-5 text-center' />
        }
        {
            this.state.departamentos&&
                <table className='table table-responsive'>
                    <thead>
                        <tr>
                            <th>Numero</th>
                            <th>Nombre</th>
                            <th>Localidad</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                {
                    this.state.departamentos.map((d, index)=>{
                        return (<tr>
                            <td>{d.numero}</td>
                            <td>{d.nombre}</td>
                            <td>{d.localidad}</td>
                            <td><NavLink to={"/update/"+d.numero+"/"+d.nombre+"/"+d.localidad} className="btn btn-warning">Update</NavLink></td>
                            <td><button className="btn btn-danger" onClick={()=>this.deleteDepartamento(d.numero)}>Delete</button></td>
                        </tr>)
                    })
                }
                    </tbody>
                </table>
        }
     </div>
    )
  }
}
