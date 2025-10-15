import { Component } from "react";
import ComicHijo from "./ComicHijo";
class ComicPadre extends Component{

    state={
        comics:[
                    {
                    titulo: "Spiderman",
                    imagen:
                        "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
                    descripcion: "Hombre araña"
                    },
                    {
                    titulo: "Wolverine",
                    imagen:
                        "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
                    descripcion: "Lobezno"
                    },
                    {
                    titulo: "Guardianes de la Galaxia",
                    imagen:
                        "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
                    descripcion: "Yo soy Groot"
                    },
                    {
                    titulo: "Avengers",
                    imagen:
                        "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
                    descripcion: "Los Vengadores"
                    },
                    {
                    titulo: "Spawn",
                    imagen:
                        "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
                    descripcion: "Al Simmons"
                    },
                    {
                    titulo: "Batman",
                    imagen:
                        "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
                    descripcion: "Murcielago"
                    }
                ],
        favorito:null

    }
    delete=(pos)=>{
        if(this.state.comics[pos].titulo===this.state.favorito.titulo){
           this.setState({
            favorito:null
           }) 
        }
        this.state.comics.splice(pos,1)
        this.setState({
            comics: this.state.comics,
        })
    }

    seleccionarFavorito=(titulo, img, desc)=>{
        
        console.log("entro")
        this.setState({
            favorito: {
                titulo: titulo,
                imagen: img,
                descripcion: desc
            }
        })
        console.log(this.state.favorito);
    }

render(){
    return(<>
    <h1>Comics</h1>
    {
        this.state.favorito &&
        <div style={{border:"2px black solid"}}>
            <h2>Mi comic favorito:</h2>
            <h2>{this.state.favorito.titulo}</h2>
            <img src={this.state.favorito.imagen} alt="imagen" style={{width:"250px", height:"400px" }}></img>
            <h4 style={{color:"blue"}}>{this.state.favorito.descripcion}</h4>
        </div>

    }
    {
        this.state.comics.map((pagina, index)=>{
            return(<ComicHijo titulo={pagina.titulo}
                imagen={pagina.imagen}
                descripcion={pagina.descripcion}
                key={index} 
                id={index}
                deleteComic={this.delete}
                comicFav={this.seleccionarFavorito}></ComicHijo>)
        })
    }
    </>)
}
}
export default ComicPadre