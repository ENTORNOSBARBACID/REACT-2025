import React, { Component } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useParams} from "react-router-dom";
import Home from "./Home"
import Details from './Details';
import Update from './Update';

export default class Router extends Component {
  render() {

    function DetailsElement(){
        let {id}=useParams();
        console.log(id);
        return (<Details id={id}></Details>)
    }
    function UpdateElement(){
        let {id}=useParams();

        return(<Update id={id}></Update>)
    }
    
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/details/:id" element={<DetailsElement></DetailsElement>}></Route>
            <Route path="/update/:id" element={<UpdateElement></UpdateElement>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
