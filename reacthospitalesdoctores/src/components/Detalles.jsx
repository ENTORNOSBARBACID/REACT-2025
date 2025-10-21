import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';

export default class Detalles extends Component {
    urlD=Global.apiDoctores;
    state={
        doctor:[]
    }
    componentDidMount=()=>{
        this.mostrarDoctorDetalles()
    }
    componentDidUpdate=(old)=>{
        if(old.idDoctor!==this.props.idDoctor){
            this.mostrarDoctorDetalles()
        }
    }
    mostrarDoctorDetalles=()=>{
        console.log("entro")
        let requestD="api/doctores/"+this.props.idDoctor
        axios.get(this.urlD+requestD).then(response=>{
            this.setState({
                doctor:response.data
            })
            console.log(response.data)
        })
    }
  render() {
    return (
        <div>{
                this.state.doctor &&
                    <ul>
                        <li>Id del doctor:{this.state.doctor.idDoctor}</li>
                        <li>Apellido del doctor:{this.state.doctor.apellido}</li>
                        <li>Especialidad del doctor:{this.state.doctor.especialidad}</li>
                        <li>Salario del doctor:{this.state.doctor.salario}</li>
                        <li>Id del hospital del doctor:{this.state.doctor.idHospital}</li>
                    </ul>
            }
      </div>
    )
  }
}
