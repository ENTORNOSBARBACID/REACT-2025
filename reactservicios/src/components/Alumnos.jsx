import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import Detalles from './Detalles';

export default class Alumnos extends Component {
  selectValue=React.createRef();
  urlAlumno=Global.urlAlumnos
  
  
  loadAlumno=()=>{
    
    var cursos=[]
    var requestAlumno="api/alumnos";
    
    axios.get(this.urlAlumno+requestAlumno).then(response=>{
        var alumnos=response.data
        alumnos.forEach(al => {
            
            if(!cursos.find(año => año === al.idCurso)){
                cursos.push(al.idCurso);
        }
        });
        cursos.sort()
        this.setState({
                año:cursos
            })
        
    })
  }
  mostrarAlCur=(event)=>{
    event.preventDefault();
      var requestMostrar="api/alumnos/filtrarcurso/"+this.selectValue.current.value
      
      axios.get(this.urlAlumno+requestMostrar).then(response=>{
          this.setState({
              alumnos:response.data
            })
        })
        this.setState({
            idCurso: this.selectValue.current.value
          })
    }
    mostrarAl=(al)=>{
        this.setState({
            alumno:al
        })
        console.log(this.state.alumno)
    }

  state={
    año:[],
    alumnos:[],
    alumno:[],
    idCurso:""
  }
  componentDidMount=()=>{
    this.loadAlumno()
  }
  
    render() {
    return (
      <div>
        <h1>Alumnos</h1>
        <select ref={this.selectValue} onChange={this.mostrarAlCur}>
        {
            this.state.año.map((año, index)=>{
                return(<option key={index} value={año}>{año}</option>)
            })
        }
        </select>
        <ul>
            {
             this.state.alumnos.map((al, index)=>{
                return(<li key={index}>{al.apellidos} ,  {al.nombre}<Detalles idAl={al.idAlumno} mostrar={this.mostrarAl}></Detalles></li>)
             })   
            }
        </ul>
                    <div>
                        <h1>{this.state.alumno.nombre} {this.state.alumno.apellidos}</h1>
                        <h1>{this.state.alumno.idCurso}</h1>
                        <img src={this.state.alumno.imagen}></img>
                    </div>
                
        
      </div>
    )
  }
}
