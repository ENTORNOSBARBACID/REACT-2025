import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';

export default class Details extends Component {
    url=Global.urlCoches;
    state={
        coche:""
    }

    loadDetail=()=>{
        var request="api/coches/findcoche/"+this.props.id;

        console.log(request)

        axios.get(this.url+request).then(response=>{
            this.setState({
                coche:response.data
            })
        })
    
    }

    componentDidMount=()=>{
        this.loadDetail()
    }
  render() {
    return (
      <div>
        <h1 style={{color:"blue"}}>Details of: {this.props.id}</h1>
        <ul className="list-group">
            <li className="list-group-item">{this.state.coche.idCoche}</li>
            <li className="list-group-item">{this.state.coche.marca}</li>
            <li className="list-group-item">{this.state.coche.modelo}</li>
            <li className="list-group-item">{this.state.coche.conductor}</li>
            <li className="list-group-item"><img src={this.state.coche.imagen} alt="" style={{height:"150px", width:"250px"}}></img></li>
        </ul>
      </div>
    )
  }
}
