import React, { useState } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DivMain = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
padding:10px;
margin: 20px;˜
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

const DivSec = styled.div`
display:flex;
align-items:center;
`

const H2 = styled.h2`
font-size:15px;
`


export const CardAdmin = (props) => {

    
    const deletar = (id) => {

        const token = localStorage.getItem('token')

        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/angelo-alves-franklin/trips/${id}`, {
            headers: {
                "Content-Type": "application/json",
                auth: token,
            }
        }).then((response) => {
            console.log(response)

        })
    }

    return (
            <DivMain>
                <DivSec> <H2>Nome:</H2> <H2>{props.nome}</H2></DivSec>
                <DivSec> <H2>id:</H2> <H2>{props.id}</H2></DivSec>
                <button onClick={() => { deletar(props.id) }}> deletar </button>
            </DivMain>
    )
}