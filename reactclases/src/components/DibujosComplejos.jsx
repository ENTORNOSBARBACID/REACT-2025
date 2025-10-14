import { Component } from "react";

class DibujosComplejos extends Component{

    dibujarNumeros=()=>{
        var lista=[];
        for(var i=0; i<=7; i++){
            var numero=parseInt(Math.random()*100)+1;
            lista.push(<li  key={i}> {numero}   </li>)
        }
        return lista;
    }

render(){
    return(<div>
        <h1 style={{color: "blue"}}>Dibujos complejos</h1>

        <ul>
            {this.dibujarNumeros()}
        </ul>

    </div>)
}

}
export default DibujosComplejos;