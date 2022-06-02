import React from "react"

function Card(props){
    return(
        <div className={props.classes} onClick="reproduzVideo()">
            <img src={props.url} alt=""></img>
            <h4>{props.titulo}</h4>
        </div>
    )
}
export default Card
//"box-pagina-principal"