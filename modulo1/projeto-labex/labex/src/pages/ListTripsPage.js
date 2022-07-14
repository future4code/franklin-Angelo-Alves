import { CardViagem } from "../components/CardViagem"
import axios from "axios"
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

const Div = styled.div`
display: flex;
flex-direction:column;
align-items:center;`



export const ListTripPage = () => {
    const [viagens, setViagens] = useState([])

    const navigate = useNavigate();

    let ListaDeViagens = viagens.map((item) => {
        return (
            <CardViagem nome={item.name} descricao={item.description} planeta={item.planet} data={item.date} duracao={item.durationInDays}/>
        );
      });

    const getTrips = () => {
        
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/angelo-alves-franklin/trips').then((response) => {
            setViagens(response.data.trips)
            console.log(viagens)
        }).catch((error) => {
            console.log(error.response)
        })

    }

    const voltarInicio = () => {
        navigate(-1)
    }

    useEffect(getTrips,[])

    return (
        <div>
            <button onClick={voltarInicio}>voltar</button>
            <Div>
                {ListaDeViagens}
                {/* <button onClick={getTrips}>clie</button> */}
            </Div>
        </div>
    )
}