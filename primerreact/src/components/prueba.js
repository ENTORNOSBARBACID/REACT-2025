function Prueba(props){
    var saludo="Mi primer react¡¡";
    let nombre=props.nombre;
    var mensaje="Quiero cambiar este texto";

    const miMetodo=()=>{
        alert("Hola");
    }

    const Metodo=()=>{
        console.log("Hola");
    }

    const MetodoAccion=(num)=>{
        var numdoble=num * 2;
        alert("El doble de "+num+" es "+numdoble)

    }
    const CambiarTexto=()=>{
        mensaje="No va a aparecer esto";
    }

    var estilo={
        color:"red",
        backgroundColor: "yellow"
    }
    return(
        <>
        {Metodo()}
        <h1>{saludo}</h1>
        <h2>Prueba</h2>
        <h2>Te llamas {nombre} y tienes {props.edad} años</h2>
        <button onClick={()=>miMetodo()}>Pulsame</button>
        <button onClick={()=>MetodoAccion(11)} style={estilo}>Doble 11</button>
        <button onClick={()=> MetodoAccion(23)} style={{color:"fuchsia", backgroundColor:"black"}}>Doble 23</button>
        <button onClick={()=> MetodoAccion(456)}>Doble 456</button>
        <button onClick={()=> CambiarTexto()}>Cambiar texto</button>
        <h1>{mensaje}</h1>
        </>)
    
}


export default Prueba;