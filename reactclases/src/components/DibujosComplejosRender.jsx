import { Component } from "react";
class DibujosComplejosRender extends Component{

    state={
       nombres:["Lucia", "Alex", "Pinilla", "Palomon"]
    }

    añadirNombre=()=>{

        this.state.nombres.push("Hermeregildo")

        this.setState({
            nombres: this.state.nombres
        })
    }

    render(){
        return(<div>
            <h1>Dibujos Complejos Render</h1>
            <button onClick={this.añadirNombre}>Añadir nombre</button>
            {
                //Este codigo es JSX de react
                //El codigo logico debe contener un return para hacer el dibujo
                this.state.nombres.map((nombre, index) =>{
                    //este codigo no puede estar vacio, debe contener un return
                    return(<h3 style={{color: "red"}} key={index}> {nombre} </h3>)
                }
            )}
        </div>)
    }

}

export default DibujosComplejosRender;