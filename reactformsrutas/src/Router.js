import React, { Component } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import Cine from './component/Cine';
import Musica from './component/Musica';
import FormSimple from "./component/FormSimple"
import Collatz from './component/Collatz';
import TablaMultiplicar from "./component/TablaMultiplicar"
import TablaMultiplicar2 from "./component/TablaMultiplicar2"
import SeleccionMultiple from "./component/SeleccionMultiple"

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cine" element={<Cine/>}></Route>
          <Route path="/musica" element={<Musica/>}></Route>
          <Route path="/form" element={<FormSimple/>}></Route>
          <Route path="/collatz" element={<Collatz/>}></Route>
          <Route path="/tabla" element={<TablaMultiplicar/>}></Route>
          <Route path="/tabla2" element={<TablaMultiplicar2/>}></Route>
          <Route path="/seleccionmultiple" element={<SeleccionMultiple/>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
