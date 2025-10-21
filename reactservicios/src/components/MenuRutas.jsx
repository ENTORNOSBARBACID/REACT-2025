import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <h1>Menu rutas</h1>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/tabla/12">Tabla</NavLink></li>
            <li><NavLink to="/collatz/354">Collatz 354</NavLink></li>
            <li><NavLink to="/collatz/745">Collatz 745</NavLink></li>
        </ul>
      </div>
    )
  }
}
