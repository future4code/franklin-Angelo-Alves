import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components'
import { Etapa1 } from './components/Etapa1';
import { Etapa2 } from './components/Etapa2';
import { Etapa3 } from './components/Etapa3';
import { Etapa4 } from './components/Etapa4';
import { ButtonProx } from './components/ButtonProx';

const App = () => {
	const [etapa, setEtapa] = useState(1)
  
  const irParaProximaEtapa = () =>{
    setEtapa(etapa +1)
  }
	const renderizaEtapa = () => {
		switch (etapa) {
	      case 1: 
	        return (<div><Etapa1 /> <br /> <ButtonProx aoClicar={irParaProximaEtapa}/></div>)
	      case 2: 
	        return (<div><Etapa2 /> <br /> <ButtonProx aoClicar={irParaProximaEtapa}/></div>)
        case 3:
          return (<div><Etapa3 /> <br /> <ButtonProx aoClicar={irParaProximaEtapa}/></div>)
        case 4:
          return (<Etapa4 />)
    }
  }
  return (
    <div className="App">
      {renderizaEtapa()}
      <br />
    </div>

  );
}

export default App;