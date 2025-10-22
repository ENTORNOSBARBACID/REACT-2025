import React, { Component } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Home"
import Menu from './Menu';
import CreateDept from './CreateDept';
import {useParams} from "react-router-dom"
import UpdateDept from "./UpdateDept"

export default class Router extends Component {
  render() {
    function UpdateElement(){
       let {numero}=useParams();
       let {nombre}=useParams();
       let {localidad}=useParams();

       return (<UpdateDept numero={numero} nombre={nombre} localidad={localidad}></UpdateDept>)
    }
    return (
      <div>
            <BrowserRouter>
            <Menu></Menu>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/create" element={<CreateDept></CreateDept>}></Route>
                    <Route path="/update/:numero/:nombre/:localidad" element={<UpdateElement></UpdateElement>}></Route>
                </Routes>
            </BrowserRouter>
      </div>
    )
  }
}
