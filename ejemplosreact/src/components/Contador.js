import { useState } from "react";

function Contador(){
    
    const [numero, setNumero]=useState(0);
    const sumarContador=()=>{
        
        setNumero(numero+1);
    }
    return(<>
        
        <h1 style={{color:"red"}}>Ejemplo state</h1>
        <h2> El número es: {numero} </h2>
        <button onClick={()=>sumarContador()}>Sumar numero al contador</button><br></br>
        <button onClick={()=>{
            setNumero(numero-1)
        }}>Restar numero al contador</button>

    </>)
}
export default Contador;