import axios from "axios";
import React, { useState } from "react";
import './App.css'
import styled from 'styled-components'
import { colors } from "./constants/colors";
import { Header } from "./imgs/Header";
import { Logo } from "./imgs/logo_loteria";
import { HeaderDesk } from "./imgs/HeaderDesk";
import { date } from "./utils/date";
import arrow from './imgs/arrow.png'
const baseURL = "https://brainn-api-loterias.herokuapp.com/api/v1/";

const MainDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
background-color: #EFEFEF;
height: 100vh;
width: 100vw;
overflow-x: hidden;
@media (min-width: 912px) {
  flex-direction: row;
  overflow:hidden;
  }
`
const HeaderDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
height: 420px;
`
const NumerosDiv = styled.section`
display:flex;
align-items:center;
justify-content: center;
flex-wrap: wrap;
margin:0  40px;
@media (min-width: 912px) {
  margin-right: 100px;
}
`
const LogoDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
z-index: 12000;
position: absolute;
top:140px;
@media (min-width: 912px) {
  flex-direction: row;
  top: 45%;
  left: 5%;
}
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
-webkit-appearance: none;
-moz-appearance:    none;
appearance:         none;
background-image: url(${arrow});
background-repeat: no-repeat;
background-position: 0%;
background-position-x: 90%;
@media (min-width: 912px) {
    position: absolute;
    top: 90px;
    left: 90px;
    width: 200px;
    height: 45px;
    z-index: 10;
  }
`
const NomeLoteria = styled.h2`
font-family: 'Montserrat', sans-serif;
font-weight: 700;
color: white;
font-size: 30px;
@media (min-width: 912px) {
    z-index: 10;
    margin: 25px;
  }
`
const NumeroConcurso = styled.p`
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-weight: 500;
color: white;
position: absolute;
top: 290px;
z-index: 2000;
@media (min-width: 912px) {
  display: none;
  }
`
const NumeroConcursoDesk = styled.div`
  position: absolute;
  top: 80%;
  left: 5%;
  color:white;
  padding: 0;
  @media (max-width: 912px){
    display: none;
  }
`
const H6ConcursoDesk = styled.h6`
font-family: 'Montserrat', sans-serif;
font-weight: 500;
font-size: 14px;
margin: 0;

`
const H5ConcursoDesk = styled.h5`
font-family: 'Montserrat', sans-serif;
font-weight: 700;
font-size: 20px;
margin-top: 15px;
`
const Bolinha = styled.div`
background-color: white;
width: 50px;
height: 50px;
border-radius: 50px;
display: flex;
align-items: center;
justify-content: center;
margin:10px;
@media (min-width: 912px) {
  width: 60px;
  height: 60px;
}
`
const TextoInformativo = styled.p`
margin-top: 50px;
font-family: 'Montserrat', sans-serif;
font-weight: 400;
font-size: 14px;
text-align: center;
@media (min-width: 912px) {
  position: absolute;
  bottom: 70px;
  right: 200px;
}
`

function App() {
  const [loteria, setLoteria] = useState(null);
  const [input, setInput] = useState(['MEGA-SENA'])
  const [concurso, setConcurso] = useState('')
  const [numeros, setNumeros] = useState([])
  const [data, setData] = useState('')

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
      setData(date(response.data.data))
      console.log(data)
    });
  }, [concurso, input]);




  return (
    <MainDiv>
      <HeaderDiv>
        <Header color={colors[input].cor} />
        <Select value={input} onChange={(e) => setInput(e.target.value)}>
          {loteria ? loteria.map((loteria) => <option value={loteria.nome.toUpperCase()}>{loteria.nome.toUpperCase()}</option>) : <option>carregando</option>}
        </Select>
        <LogoDiv>
          <Logo />
          <NomeLoteria>{input}</NomeLoteria>
        </LogoDiv>

        <NumeroConcurso>{`CONCURSO Nº ${concurso.concursoId}`}</NumeroConcurso>
        <NumeroConcursoDesk>
          <H6ConcursoDesk>CONCURSO</H6ConcursoDesk>
          <H5ConcursoDesk>{concurso.concursoId} - {data} </H5ConcursoDesk>
        </NumeroConcursoDesk>
      </HeaderDiv>
      <HeaderDesk color={colors[input].cor} />
      <NumerosDiv>
        {numeros.map((numero) => {
          return <Bolinha>{numero}</Bolinha>
        })}
        <TextoInformativo>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</TextoInformativo>
      </NumerosDiv>
    </MainDiv>
  );
}
export default App

