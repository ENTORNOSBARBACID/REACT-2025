import Hijomatematicas from "./Hijomatetaticas";

function Matematicas(){


     
     const triple=(numero)=>{
        var ntriple=numero*3;
        alert("El triple de "+numero+" es "+ntriple)
     }
    return(<>
        <h1>Soy el padre</h1>
        <hr></hr>
        
        <Hijomatematicas numero={triple}></Hijomatematicas>
    </>);
}
export default Matematicas;