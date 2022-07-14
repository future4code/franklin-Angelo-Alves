import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CreateTripPage = () => {
    const navigate = useNavigate()

    const [inputNome, setInputNome] = useState('')
    const [inputDesc, setInputDesc] = useState('')
    const [inputPlaneta, setInputPlaneta] = useState('')
    const [inputDurac, setInputDurac] = useState('')
    const [inputData, setInputData] = useState('')

    const handleInputNome = (event) => {
        setInputNome(event.target.value)
    }
    const handleInputDesc = (event) => {
        setInputDesc(event.target.value)
    }
    const handleInputPlaneta = (event) => {
        setInputPlaneta(event.target.value)
    }
    const handleInputDurac = (event) => {
        setInputDurac(event.target.value)
    }
    const handleInputData = (event) => {
        setInputData(event.target.value)
    }
    const criarTrip = () => {
        const token = localStorage.getItem('token')
        console.log(token)

        const body = {
            "name": inputNome,
            "planet": inputPlaneta,
            "date": inputData,
            "description": inputDesc,
            "durationInDays": inputDurac
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/angelo-alves-franklin/trips',body, {
            headers: {
                "Content-Type": "application/json",
                auth: token,
            }
        }).then((response) => {
            console.log(response)

        })
    }
    return (
        <div>
            <button onClick={() =>{navigate(-1)}}>voltar</button>
            <h1>CreateTripPage</h1>
            <input placeholder='nome' value={inputNome} onChange={handleInputNome}  />
            <input placeholder='descrição' value={inputDesc} onChange={handleInputDesc}  />
            <input placeholder='planeta' value={inputPlaneta} onChange={handleInputPlaneta}  />
            <input placeholder='duração (em dias)' value={inputDurac} onChange={handleInputDurac}  />
            <input placeholder='data' value={inputData} onChange={handleInputData}  />
            <button onClick={criarTrip}>Criar</button>
        </div>
    )
}