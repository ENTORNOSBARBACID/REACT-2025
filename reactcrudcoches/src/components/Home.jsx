import React, { Component } from 'react'
import axios from "axios"
import Global from '../Global'
import { Navigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default class Home extends Component {

    url=Global.urlCoches;
    state={
        coches:[],
    }

    loadCar=()=>{
        let request="api/coches";

        axios.get(this.url+request).then(response=>{
            this.setState({
                coches:response.data
            })
            console.log(response.data)
        })
    }



    componentDidMount=()=>{
        this.loadCar()
    }
  render() {
    return (
      <div className='text-center'>
        <h1 style={{color:"red"}} className='m-5'>AntroCoches</h1>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>ID COCHE</th>
                    <th>MODELO</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.coches.map((c, index)=>{
                        return (<tr key={index}>
                            <td>{c.idCoche}</td>
                            <td>{c.modelo}</td>
                            <td><img src={c.imagen} alt="" style={{height:"150px", width:"250px"}}></img></td>
                            <td><NavLink to={"/details/"+c.idCoche}><button className='btn btn-warning m-1'>Details</button></NavLink>
                            <NavLink to={"/update/"+c.idCoche}><button className='btn btn-success m-1'>Update</button></NavLink>
                            <button className='btn btn-danger m-1'>Delete</button></td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
