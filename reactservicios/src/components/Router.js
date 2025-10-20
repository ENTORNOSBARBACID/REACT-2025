import React, { Component } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Home";
import TablaMultiplicar from './TablaMultiplicar';
import NotFound from './NotFound';
import { useParams } from 'react-router-dom';
import Collatz from './Collatz';


export default class Router extends Component {
    render() {
        function TablaElement(){
            let {minumero}=useParams();
            return (<TablaMultiplicar numero={minumero}></TablaMultiplicar>)
        } 
        function CollatzElement(){
            let {numero}=useParams();
            return (<Collatz numero={numero}></Collatz>)
        }
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/tabla/:minumero" element={<TablaElement/>}></Route>
                    <Route path="/collatz/:numero" element={<CollatzElement/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
            </BrowserRouter>
    )
  }
}
