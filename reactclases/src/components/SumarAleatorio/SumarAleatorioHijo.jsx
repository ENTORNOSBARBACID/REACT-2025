import { Component } from "react";

class SumarAleatorioHijo extends Component{

    sumarPadre=()=>{
        var suma=this.props.num;
        this.props.sumar(suma)
    }

    render(){
        return(<>
            <li>{this.props.num}</li><button onClick={this.sumarPadre}> SUMAR {this.props.num}</button>
        </>)
    }
}
export default SumarAleatorioHijo;