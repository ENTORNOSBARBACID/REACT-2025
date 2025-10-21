import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { NavLink } from 'react-router-dom'
import Detalles from './Detalles'
export default class Doctores extends Component {
    urlD=Global.apiDoctores
    state={
        doctores:[]
    }
    loadDoctores=()=>{
        let requestD="api/doctores/doctoreshospital/"+this.props.idhospital
        console.log("Entro")
        axios.get(this.urlD+requestD).then(response=>{
            this.setState({
                doctores:response.data
            })
        })
    }
    componentDidMount=()=>{
        this.loadDoctores()
    }
    componentDidUpdate=(old)=>{
        if(old.idhospital!==this.props.idhospital){
            this.loadDoctores()
        }
    }
  render() {
    return (
      <div>
        <h2 style={{color:"red"}}>
            Doctores del hospital con ID: {this.props.idhospital}
        </h2>
        <hr></hr>
        {
            this.state.doctores &&
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id Doctor</th>
                            <th>Apellido</th>
                            <th>Especialidad</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.doctores.map((d, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{d.idDoctor}</td>
                                        <td>{d.apellido}</td>
                                        <td>{d.especialidad}</td>
                                        <td><NavLink className="navbar-brand" to ={"/doctores/"+d.idHospital+"/"+d.idDoctor}>Ver detalles</NavLink></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
        }
        {
            this.props.idDoctor &&
                <Detalles idDoctor={this.props.idDoctor}></Detalles>
        }
      </div>
    )
  }
}
