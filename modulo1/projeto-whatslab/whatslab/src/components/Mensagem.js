import React from "react";
import styled from 'styled-components'

const DivMensagem = styled.div`
border:none;
background-color:#F5F6F6;
display:flex;
flex-direction: column;
align-items: flex-start;
border-radius: 15px;
margin: 10px 5%;
width:50%;
`
const DivMensagemPropria = styled.div`
border:none;
background-color:#D9FED2;
display:flex;
flex-direction: column;
align-items: flex-end;
border-radius: 15px;
margin: 10px 5%;
margin-left:45%;
width:50%;
`
const UsuarioMSG = styled.h1`
margin:10px;
font-size:17px;
color:gray;
font-weight:300;
`
const MensagemMSG = styled.h1`
margin:10px;
text-align:left;
font-size:18px;
font-weight:400;
`

export const Mensagem = (props) => {
    if (
        props.usuario === 'eu' ||
        props.usuario === 'EU' ||
        props.usuario === 'Eu' ||
        props.usuario === 'eU'
    ) {
        return (
            <DivMensagemPropria>
                <MensagemMSG>{props.mensagem}</MensagemMSG>
            </DivMensagemPropria>
        )
    } else {
        return (
            <DivMensagem>
                <UsuarioMSG>{props.usuario}</UsuarioMSG>
                <MensagemMSG>{props.mensagem}</MensagemMSG>
            </DivMensagem>
        )
    }
}