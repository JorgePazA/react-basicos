

import React , {Component} from "react";

    // Componente basado en clases
// class Componente extends Component{
//     render(){
//         return <h2>{this.props.msg}</h2>
//     }
// }

// Componente basado en funcion 
function Componente(props){
    return <h2>{props.msg}</h2>
}


export default Componente;