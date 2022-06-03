import React, { useState } from 'react';
import './App.css';
import {Header} from './components/Header'
import {Mensagem} from './components/Mensagem'
import styled from 'styled-components'

const DivInputs = styled.div`
background-color:#EFF2F5;
width:100%;
display:flex;
align-items:center;
justify-content: center;
position: fixed;
bottom: 0px;
`
const InputUsuario = styled.input`
width:20%;
font-size:18px;
border:none;
border-radius:6px;
height:40px;
margin:20px 10px 20px 10px;
padding-left:10px;
`
const InputMensagem = styled.input`
font-size:18px;
border:none;
border-radius:6px;
width:60%;
height:40px;
margin:20px 10px 20px 10px;
padding-left:10px;
`
const ButtonEnviar = styled.button`
height:40px;
width:40px;
border-radius:60px;
border:none;
background-color:#128C7E;
color:white;
fon10size:25p10
font-weight:bolder;
margin:20px 10px 20px 10px;
`
const DivListaDeMensagem = styled.div`
`
function App() {

  const [inputUsuario, setInputUsuario] = useState("")
  const [inputMensagem, setInputMensagem] = useState("")
  
  const handleInputUsuario = (event) =>{
    setInputUsuario(event.target.value)
  }
  const handleInputMensagem = (event) =>{
    setInputMensagem(event.target.value)
  }

  const enviarMensagem = () =>{
    if (InputUsuario !== '' && inputMensagem !== ''){
      const novaMensagem = {
        usuario: inputUsuario,
        mensagem: inputMensagem
      }
      const novaListaDeMensagens = [...mensagens, novaMensagem]
      setMensagens(novaListaDeMensagens)
      setInputMensagem('')
      setInputUsuario('')
    }
  }
  document.addEventListener('keydown', function (event) {
    if (event.keyCode !== 13) return;
    enviarMensagem();
    let inputBasico = document.querySelector('#input-inicio') 
    inputBasico.focus()
})

  
const [mensagens, setMensagens] = useState([
  
  ])
  const listaDeMensagens = mensagens.map((mensagem, index) =>{
    return(
        <Mensagem key={index}
              usuario={mensagem.usuario}
              mensagem={mensagem.mensagem}
            />)
  })
  return (
    <div className="App">
      <Header />
      <DivListaDeMensagem>
      {listaDeMensagens}
      </DivListaDeMensagem>
      <DivInputs>
        <InputUsuario id="input-inicio" value={inputUsuario} onChange={handleInputUsuario} placeholder='Usuário'/>
        <InputMensagem value={inputMensagem} onChange={handleInputMensagem} placeholder='Mensagem'/>
        <ButtonEnviar onClick={enviarMensagem}>></ButtonEnviar>
      </DivInputs>
    </div>
  );
}

export default App;
