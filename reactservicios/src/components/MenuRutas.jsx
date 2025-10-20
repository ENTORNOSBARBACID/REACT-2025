import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <h1>Menu rutas</h1>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/tabla/12">Tabla</a></li>
            <li><a href="/collatz/354">Collatz 354</a></li>
            <li><a href="/collatz/745">Collatz 745</a></li>
        </ul>
      </div>
    )
  }
}
