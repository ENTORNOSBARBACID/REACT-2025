function SaludoHijo(props){
    var cambiar= props.cambiar
    var id=props.idHijo
    console.log(id);
return (<>
    <button onClick={()=>cambiar("Alberto")}>Pulsar</button>
</>)
}

export default SaludoHijo;