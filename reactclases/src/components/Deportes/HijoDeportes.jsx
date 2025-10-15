import { Component } from "react";

class HijoDeportes extends Component{

     
    
    render(){
        return(<>
        
        <li>{this.props.deporte}</li>
        <button onClick={this.seleccionarFavorito}>Añadir favorito</button>
        </>
        )
    }
}
export default HijoDeportes;