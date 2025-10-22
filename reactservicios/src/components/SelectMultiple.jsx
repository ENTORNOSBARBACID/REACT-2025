import React, { Component } from 'react'
import axios from "axios";
import Global from '../Global';
import MostrarTrabajadores from './MostrarTrabajadores';

export default class SelectMultiple extends Component {
    cajaSelect=React.createRef();
    url=Global.apiTrabajadores;

    state={
        hospitales:[],
        id:""
    }

    loadHospitales=()=>{
        var request="api/hospitales"
        axios.get(this.url+request).then(response=>{
            this.setState({
                hospitales:response.data
            })
        })
    }
    componentDidMount=()=>{
        this.loadHospitales()
    }

    getHospitales=(event)=>{
    event.preventDefault();
    var select=this.cajaSelect.current.options
    var aux=[];
    
    for(var option of select){
        if(option.selected === true){
            aux.push(option.value)
        }
    }
    console.log(aux)
    this.setState({
        id:aux
    })
  }
  render() {
    return (
        <div>
        <form onSubmit={this.getHospitales} className='r-md-1'>
            <select ref={this.cajaSelect} size="6" multiple className='form-control'>
                {
                    this.state.hospitales.map((h, index)=>{
                        return <option key={index} value={h.idHospital}>{h.nombre}</option>
                    })
                }
            </select><br></br>
            <button className="btn btn-warning">Aceptar</button>
        </form>
        {
            this.state.id&&
                <MostrarTrabajadores ids={this.state.id}></MostrarTrabajadores>
        }
      </div>
    )
  }
}
