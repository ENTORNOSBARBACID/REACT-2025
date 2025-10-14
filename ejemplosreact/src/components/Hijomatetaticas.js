function Hijomatematicas(props){
    var triple=props.numero;
    const doble=(numero)=>{
        var ndoble=numero*2;
        alert("El doble de "+numero+" es "+ndoble)  
    }
        return(<>
        <h1>Yo soy el hijo</h1>
            <button onClick={()=>triple(15)}>Triple</button><br></br>
            <button onClick={()=>doble(6)}>Doble</button>
        </>)
}
export default Hijomatematicas;