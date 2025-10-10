import imagen1 from "../assets/images/imagen1.jpg";
import './SumarNumeros.css';

function  SumarNumeros(props){

    
    const SumarNumeros=(num1, num2)=>{
        var suma=Number(num1)+Number(num2);
        alert("La suma es: "+suma)
    }
    return(<>
        {/* <img src={imagen1} alt="Img"/> */}
        <div>

        <button onClick={()=>SumarNumeros(props.n1, props.n2)}>Sumar {props.n1}+{props.n2}</button>
                
        </div>
    </>
    )
}

export default SumarNumeros;