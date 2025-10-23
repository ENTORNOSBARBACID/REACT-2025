import React, { Component } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useParams} from "react-router-dom";
import Home from './Home';
import Menu from './Menu';
import Details from './Details';

export default class Router extends Component {
  render() {
    function DetailsElement(){
        let {id}=useParams();

        return(<Details id={id}></Details>)
    }
    return (
        <BrowserRouter>
        <Menu></Menu>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/details/:id" element={<DetailsElement></DetailsElement>}></Route>
            </Routes>
        </BrowserRouter>
    )
  }
}
