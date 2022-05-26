import React from "react";
import styled from 'styled-components'

const DivCardPequeno = styled.div`
border: 1px solid black;
display:flex;
align-items:center;
width: 420px;
padding: 19px;
margin: 10px;
`
const ImgIcon = styled.img`
width:35px;
padding:5px;
`
const H3CardPequeno = styled.h3`
margin-bottom:0;
padding:5px;
`

function CardPequeno(props){
    return(
        <DivCardPequeno>
            <ImgIcon src={ props.imagem } />
            <H3CardPequeno>{props.item}</H3CardPequeno>
            <h4>{props.info}</h4>
        </DivCardPequeno>
    )
}

export default CardPequeno