import React, { Component } from 'react'
import {BrowserRouter, Routes, Rouete, Route} from 'react-router-dom';
import Home from './component/Home';
import Cine from './component/Cine';
import Musica from './component/Musica';
import FormSimple from "./component/FormSimple"

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cine" element={<Cine/>}></Route>
          <Route path="/musica" element={<Musica/>}></Route>
          <Route path="/form" element={<FormSimple/>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
