import axios from "axios"
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import { CardAdmin } from "../components/CardAdmin";

export const AdminHomePage = () => {
    const [viagens, setViagens] = useState([])

    const navigate = useNavigate();
    const voltar = () => {
        navigate('/')
    }
    const deslogar = () => {
        localStorage.removeItem('token');
        navigate('/login')
    }


    const goToCreateTrip = () => {
        navigate('/admin/create')
    }
    let ListaDeViagens = viagens.map((item) => {
        return (
            <CardAdmin nome={item.name} id={item.id} />
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
    useEffect(getTrips, [])

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token === null) {
            navigate('/login')
        }
    }, [])
    return (
        <div>
            <h1>AdminHomePage</h1>
            <button onClick={voltar}>voltar</button>
            <button onClick={deslogar}>deslogar</button>
            <button onClick={goToCreateTrip}>criar trip</button>
            {ListaDeViagens}
        </div>

    )
}