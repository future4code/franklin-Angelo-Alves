
import './App.css';
import axios from 'axios'
import React, { useState } from 'react';
import styled from 'styled-components'
import { Playlist } from './components/Playlist';
import { ListaPlaylist } from './components/ListaPlaylists';

const Li = styled.li`
list-style: none;
font-style: italic;
margin`

function App() {
  const [etapa, setEtapa] = useState('principal')


  const RenderizaEtapa = () => {
		switch (etapa) {
	      case 'playlist': 
	        return (<Playlist />)
	      case 'principal': 
	        return (<ListaPlaylist  etapa={setEtapa} />)
    }
  }
  function mudaEtapa(){
    if (etapa === 'principal'){
      setEtapa('playlist')
    }
    else if (etapa === 'playlist'){
      setEtapa('principal')
    }
  }

   return (
     <div className="App">
       <button onClick={mudaEtapa}>mostra</button> 
       <RenderizaEtapa />
      
     </div>

   );
}

export default App;