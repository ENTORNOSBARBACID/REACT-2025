import SaludoHijo from "./SaludoHijo";
function SaludoPadre(){

    var texto="Hola como va el dia majetes";

    const cambiarTexto=(saludo)=>{
        alert("Entro desde hijo");
        texto=saludo;
        console.log(texto);
    }
return(<>
    <h1>{texto}</h1>
    <SaludoHijo cambiar={cambiarTexto}/>
</>)
}
export default SaludoPadre;