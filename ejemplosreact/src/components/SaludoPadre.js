import SaludoHijo from "./SaludoHijo";
function SaludoPadre(){

    var texto="Hola como va el dia majetes";

    const cambiarTexto=(saludo)=>{
        alert("Hola, "+saludo);
    }
return(<>
    <h1>{texto}</h1>
    <SaludoHijo idHijo="1" cambiar={cambiarTexto}/>
</>)
}
export default SaludoPadre;