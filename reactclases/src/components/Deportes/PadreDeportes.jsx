import { Component } from "react";
import HijoDeportes from "./HijoDeportes";

class PadreDeportes extends Component{
    
    deportes = ["Hockey", "Karate", "Futbol", "Beisbol", "Tenis", "Padel", "Poker"];


        
    state={
        favorito:""
    }

    mostrarFavorito=(deporte)=>{
        console.log(deporte)
        this.setState({
            favorito: this.deporte
        })
    }

    render(){
        return(<>
        <h1>Padre Deportes</h1>
        <h3>Su deporte favorito es: {this.props.deporte}</h3>
        <hr></hr>
        <ul>
        {
            this.deportes.map((deporte, index)=>{
                return <HijoDeportes deporte={deporte} key={index} añdirFavorito={this.mostrarFavorito}></HijoDeportes>
            })
        }
        </ul>
        </>
        )
    }
}
export default PadreDeportes;