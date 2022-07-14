import React, { useState } from 'react';
import styled from 'styled-components'
import axios from 'axios';

const DivMain = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
padding:10px;
margin: 20px;
width:60%;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

const DivSec = styled.div`
display:flex;
align-items:center;
`

const H2 = styled.h2`
font-size:15px;
`


export const CardViagem = (props) => {
    return (
        <DivMain>
            <DivSec> <H2>Nome:</H2> <H2>{props.nome}</H2></DivSec>
            <DivSec> <H2>Descrição:</H2> <H2>{props.descricao}</H2></DivSec>
            <DivSec> <H2>Planeta:</H2> <H2>{props.planeta}</H2></DivSec>
            <DivSec> <H2>Duração:</H2> <H2>{props.duracao} dias</H2></DivSec>
            <DivSec> <H2>data:</H2> <H2>{props.data}</H2></DivSec>
            <h1>{props.texto}</h1>
        </DivMain>

    )
}