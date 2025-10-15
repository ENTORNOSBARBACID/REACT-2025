import { Component } from "react";
import HijoDeportes from "./HijoDeportes";

class PadreDeportes extends Component{
    
    deportes = ["Hockey", "Karate", "Futbol", "Beisbol", "Tenis", "Padel", "Poker"];

    state={
        favorito:""
    }

    mostrarFavorito=(deporte)=>{
        this.setState({
            favorito:deporte
        })
    }
    

    render(){
        return(<>
        <h1>Padre Deportes</h1>
        <h3>Su deporte favorito es: {this.state.favorito}</h3>
        <hr></hr>
        <ul>
        {
            this.deportes.map((deporte, index)=>{
                return <HijoDeportes deporte={deporte} key={index} mostrarFavorito={this.mostrarFavorito}></HijoDeportes>
            })
        }
        </ul>
        </>
        )
    }
}
export default PadreDeportes;