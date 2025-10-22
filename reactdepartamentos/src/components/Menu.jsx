import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

export default class Menu extends Component {
  render() {
    return (
       <div className="d-flex h-100 text-center text-white bg-dark">
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <header className="mb-auto">
                <div>
                <h3 className="float-md-start mb-0">Cover</h3>
                <nav className="nav nav-masthead justify-content-center float-md-end">
                    <NavLink className="nav-link text-light" aria-current="page" to="/">Home</NavLink >
                    <NavLink className="nav-link text-light"  to="/create">Crear departamento</NavLink >
                    <NavLink className="nav-link text-light"  to="#">Contact</NavLink >
                </nav>
                </div>
            </header>
            </div>
      </div>
    )
  }
}
