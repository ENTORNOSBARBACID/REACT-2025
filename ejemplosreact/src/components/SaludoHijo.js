function SaludoHijo(props){
    var cambiar= props.cambiar
return (<>
    <button onClick={()=>cambiar("Hola")}>Cambiar texto</button>
</>)
}

export default SaludoHijo;