import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    const [inputEmail, setInputEmail] = useState('')
    const [inputSenha, setInputSenha] = useState('')
    const navigate = useNavigate()

    const handleEmail = (event) => {
        setInputEmail(event.target.value)
    }

    const handleSenha = (event) => {
        setInputSenha(event.target.value)
    }

    const makeLogin = () => {
        const body = {
            email: inputEmail,
            password: inputSenha
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login', body).then((response) => {
            console.log('logou', response.data.token)
            localStorage.setItem('token', response.data.token)
            navigate('/home')
        }).catch((error) => {
            console.log(error.response)
        })

    }
    return (
        <div>
            <h1>LoginPage</h1>
            <input value={inputEmail} placeholder='email' type='email' onChange={handleEmail}/>
            <input value={inputSenha} placeholder='senha' type='email' onChange={handleSenha}/>
            <button onClick={makeLogin} >Login</button>
        </div>

    )
}