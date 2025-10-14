import { Component } from "react";

class HijoDeportes extends Component{


    
    render(){
        return(<>
        
        <li>{this.props.deporte}</li>
        <button>Añadir favorito</button>
        </>
        )
    }
}
export default HijoDeportes;