import { useState } from "react";

function Car(props){
    const[estado, setEstado]=useState(false);
    const[velocidad, setVelocidad]=useState(0)

    var coche={
        marca:props.marca,
        modelo:props.modelo,
        velocidad: Number(props.velocidadmax),
        aceleracion:Number(props.aceleracion)
    }
    const comprobarfisico=()=>{
        if(estado===false){
            return (<h1 style={{color:"red"}}>Apagado</h1>)
        }else
            return (<h1 style={{color:"green"}}>Arrancado</h1>)
    }
    const cambiar=()=>{
        setEstado(!estado);
    }
    const acelerar=()=>{
        if(estado===false){
            alert("El coche esta apagao¡");
        }else 
            if(velocidad >= coche.velocidad){
            setVelocidad(coche.velocidad);
        }else{
            setVelocidad(velocidad + coche.aceleracion);
        }
    }

    return (<>
    <h1>Coche {coche.marca} {coche.modelo}</h1>
    <h1>Velocidad: {velocidad}</h1>
    {comprobarfisico()}
    <button onClick={()=> cambiar()}>Arrancar/apagar</button>
    <button onClick={()=> acelerar()}>Acelerar</button>
    </>)
}

export default Car;