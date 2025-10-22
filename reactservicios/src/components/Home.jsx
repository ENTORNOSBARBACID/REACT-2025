import React, { Component } from 'react'
import SelectMultiple from './SelectMultiple'

export default class Home extends Component {

 

  render() {
    return (
      <div><h1>Home rutas con Path</h1>
        <SelectMultiple getHospitales={this.getHospitales}></SelectMultiple>
      </div>
    )
  }
}
