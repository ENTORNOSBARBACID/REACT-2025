import React, { Component } from 'react'
import Global from '../Global';
import axios from "axios";

export default class MostrarTrabajadores extends Component {

    cajaIncremento=React.createRef();
    url=Global.apiTrabajadores;
    data=""
    state={
        trabajadores:[],
    }
    requestTrabajadores=""

    loadTrabajadores=()=>{
        

            for(var id of this.props.ids){

                this.data="idhospital="+id+"&";
            }


        this.data=this.data.substring(0, this.data.length - 1);
        this.requestTrabajadores="api/trabajadores/trabajadoreshospitales?"+this.data;


        axios.get(this.url+ this.requestTrabajadores).then(response=>{
            this.setState({
                trabajadores: response.data
            })
        })
    }

    incrementar=()=>{
        var incremento=this.cajaIncremento.current.value;
        var request="api/trabajadores/UpdateSalarioTrabajadoresHospitales?incremento="+incremento+"&"+this.data;
        console.log(request) 
        axios.put(this.url+request).then(response=>{
            console.log("incrementado")
            this.loadTrabajadores()
        })
        
    }

    componentDidMount=()=>{
        this.loadTrabajadores()
    }
    componentDidUpdate=(old)=>{
        if(old.ids!=this.props.ids){
            this.loadTrabajadores()
        }
    }

  render() {
    return (
      <div>

        <label>Incrementar salarios:</label>
        <input className='form-control' ref={this.cajaIncremento} type="number"></input>
        <button onClick={this.incrementar} className='btn btn-primary'>Incrementar Salario</button>

        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Salario</th>
                    <th>Id hospital</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.trabajadores.map((t, index)=>{
                        return <tr>
                            <td>{t.apellido}</td>
                            <td>{t.oficio}</td>
                            <td>{t.salario}</td>
                            <td>{t.idHospital}</td>
                        </tr>
                    })
                }

            </tbody>
        </table>
      </div>
    )
  }
}
