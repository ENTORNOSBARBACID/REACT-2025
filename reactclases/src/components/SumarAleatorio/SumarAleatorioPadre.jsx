import { Component } from "react";
import SumarAleatorioHijo from "./SumarAleatorioHijo";

class SumarAleatorioPadre extends Component{

    state={
        suma:0,
        random:[]
    }

    // componentDidMount() funcion para cargar con el componente
    dibujarNumeros=()=>{
        console.log("entro");

        var numerosRandom=[]

        for(var i=0; i<4; i++){
            var aleatorio=parseInt(Math.random()*100)+1;
            numerosRandom.push(aleatorio)
        }

        this.setState({
            random: numerosRandom
        })
    }
     sumar=(sumaHijo)=>{
        var total=this.state.suma+sumaHijo
            this.setState({
                suma: total
            })
        }

    render(){
        return(<>
            <h1>Numero aleatorio generado: {this.state.suma}</h1>
            <button onClick={this.dibujarNumeros}>Generar numeros aleatorio</button>
            <ul>
                {
                    
                    this.state.random.map((numero, index)=>{


                        return <SumarAleatorioHijo num={numero} key={index} sumar={this.sumar}></SumarAleatorioHijo>
                    })
                }
            </ul>
        </>)
    }
}
export default SumarAleatorioPadre;