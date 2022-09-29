import axios from "axios";
import React, { useState } from "react";
import './App.css'
import styled from 'styled-components'
import { colors } from "./constants/colors";
import { Header } from "./imgs/Header";
import { Logo } from "./imgs/logo_loteria";

const baseURL = "https://brainn-api-loterias.herokuapp.com/api/v1/";

const MainDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
background-color: #EFEFEF;
height: 100vh;
width: 100vw;
`
const HeaderDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
height: 370px;
`
const NumerosDiv = styled.section`
display:flex;
flex-direction:column;
align-items:center;
`
const Select = styled.select`
font-size: 15px;
width: 233px;
height: 51px;
border:none;
position: absolute;
top:40px;
padding-left: 33px;
padding-right:22px;
font-family: 'Montserrat', sans-serif;
font-weight: 500;
border-radius: 12px;
`
const NomeLoteria = styled.h2`
font-family: 'Montserrat', sans-serif;
font-weight: 700;
color: white;
position: absolute;
top: 220px;
`
const NumeroConcurso = styled.h4`
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-weight: 500;
color: white;
position: absolute;
top: 300px;
`
const Balao = styled.h1`
font-size: 20px;
color: red;
`

function App() {
  const [loteria, setLoteria] = useState(null);
  const [input, setInput] = useState(['MEGA-SENA'])
  const [concurso, setConcurso] = useState('')
  const [numeros, setNumeros] = useState([])

  React.useEffect(() => {
    axios.get(`${baseURL}/loterias`).then((response) => {
      setLoteria(response.data);
    });
  }, []);

  React.useEffect(() => {
    axios.get(`${baseURL}/loterias-concursos`).then((response) => {
      setConcurso(response.data[colors[input].index]);
    });
  }, [input]);

  React.useEffect(() => {
    axios.get(`${baseURL}/concursos/${concurso.concursoId}`).then((response) => {
      setNumeros(response.data.numeros);
      console.log(numeros);
    });
  }, [concurso, input]);

  return (
    <MainDiv>
      <HeaderDiv>
        <Header color={colors[input].cor} />
        <Select value={input} onChange={(e) => setInput(e.target.value)}>
          {loteria ? loteria.map((loteria) => <option value={loteria.nome.toUpperCase()}>{loteria.nome.toUpperCase()}</option>) : <option>carregando</option>}
        </Select>
        <Logo />
        <NomeLoteria>{input}</NomeLoteria>
        <NumeroConcurso>{`CONCURSO Nº ${concurso.concursoId}`}</NumeroConcurso>
      </HeaderDiv>
      <NumerosDiv>
        <h1>numeros</h1>
        {numeros.map((numero) => {
          return <p>{numero}</p>
        })}
      </NumerosDiv>
    </MainDiv>
  );
}
export default App

