import React, { Component } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useParams} from "react-router-dom";
import Home from './Home';
import Menu from './Menu';
import Details from './Details';
import Jugadores from './Jugadores';
import JugadorDetail from './JugadorDetail';
import Apuestas from './Apuestas';
import CreateApuesta from './CreateApuesta';

export default class Router extends Component {
  render() {
    function DetailsElement(){
        let {id}=useParams();

        return(<Details id={id}></Details>)
    }
    function JugadoresElement(){
        let {id}=useParams();

        return(<Jugadores id={id}></Jugadores>)
    }
    function JugadoresDetailElement(){
        let {id}=useParams();

        return(<JugadorDetail id={id}></JugadorDetail>)
    }
    return (
        <BrowserRouter>
        <Menu></Menu>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/details/:id" element={<DetailsElement></DetailsElement>}></Route>
                <Route path="/jugadores/:id" element={<JugadoresElement></JugadoresElement>}></Route>
                <Route path="/jugadordetails/:id" element={<JugadoresDetailElement/>}></Route>
                <Route path="/apuestas" element={<Apuestas/>}></Route>
                <Route path="/crearapuesta" element={<CreateApuesta/>}></Route>
            </Routes>
        </BrowserRouter>
    )
  }
}
