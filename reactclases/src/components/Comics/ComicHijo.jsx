import { Component } from "react";
class ComicHijo extends Component{

    seleccionarFav=()=>{
        this.props.comicFav(this.props.titulo, this.props.imagen, this.props.descripcion)
    }
    eliminarComic=()=>{
        this.props.deleteComic(this.props.id)
    }

render(){
    return(<>
        <h2>{this.props.titulo}</h2>
        <img src={this.props.imagen} alt="imagen" style={{width:"250px", height:"400px" }}></img>
        <h4 style={{color:"blue"}}>{this.props.descripcion}</h4>
        <button onClick={this.seleccionarFav}>Selecciona comic favorito</button>
        <button onClick={this.eliminarComic}>Eliminar comic</button>
    </>)
}
}
export default ComicHijo;