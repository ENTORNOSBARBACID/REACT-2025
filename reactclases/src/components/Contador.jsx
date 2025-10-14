import { Component } from "react";

//Podemos declarar metodos fuera de la clase
//Dichos metodos no pueden utilizar nada del component

function metodoAbsurdo(){
    alert("Metodo sin funcionalidad");
}

class Contador extends Component{
    //La sintaxis del HTML ha cambiado, se usa primero el metodo render
    //y dentro del render es donde pondremos el return


    //Las variables se usan a nivel de clase sin usar ni var ni let ni const

    numero = 1 ; 
    
    //Con los metodos sucede lo mismo, no tienen palabras clave

    incrementarNumero=()=>{
        //Para acceder a las variables de clase, debemos utilizar la palabra clave this
        this.numero +=1;
        alert("Valor de numero: " + this.numero)
    }

    //Las variables state son declaradas en el objeto de la clase

    state={
        valor: Number(this.props.inicio)
    }

    incrementarValor=()=>{
        //En setState se modifican objetos con su key y su value
        this.setState({
            valor: this.state.valor + 1
        })
    }

    render(){
        return (<div>
            <h1 style={{color: "blue"}}>Ejemplo contador JSX {this.props.inicio}</h1>

            {/* La llamada a los metodos se realiza con this y no se utiliza ni lambda ni parentesis */}

            <h3 style={{color:"red"}}>Valor: {this.state.valor}</h3>

            <button onClick={this.incrementarNumero}>Incrementar numero</button>
                
            <button onClick={this.incrementarValor}>Incrementar valor</button>

            <button onClick={() => {
                metodoAbsurdo()
                }}>Llamar metodo absurdo</button>

        </div>)
    }
}

export default Contador;