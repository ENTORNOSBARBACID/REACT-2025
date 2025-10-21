import React, { Component } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import MenuLinks from "./MenuLinks"
import Home from './Home';
import Doctores from './Doctores';
import Detalles from './Detalles';
import CreateHospital from './CreateHospital';

export default class Router extends Component {
  render() {
    function DoctorElement(){
        let {idhospital} =useParams();
        let {idDoctor}=useParams()
        return <Doctores idhospital={idhospital} idDoctor={idDoctor}/>
    }
    return (
        <BrowserRouter>
            <MenuLinks></MenuLinks>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/doctores/:idhospital" element={<DoctorElement></DoctorElement>}></Route>
                <Route path="/doctores/:idhospital/:idDoctor" element={<DoctorElement></DoctorElement>}></Route>
                <Route path="/create" element={<CreateHospital></CreateHospital>}></Route>
            </Routes>
        </BrowserRouter>
    )
  }
}
