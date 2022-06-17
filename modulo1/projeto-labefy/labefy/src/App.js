
import './App.css';
import axios from 'axios'
import React, { useState } from 'react';


function App() {


  function getAll(){
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',{
      headers: {
        Authorization: 'angelo-alves-franklin'
      }
    }).then((response) => {
      console.log(response)
      // setPlaylists(response.data.result.list)
    }).catch((error) => {
      console.log(error)
    })
    
  }

  function createPlaylist(){
    let body = {
      "name": input
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',body, {
      headers: {
        Authorization: 'angelo-alves-franklin'
      }
    }).then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
    getAll();
  }
  

  function addPlaylist(){
    console.log(input)
  }
  getAll()
  const [playlists, setPlaylists] = useState([])
  const [input, setInput] = useState('')
  const handleInput = (event) =>{
    setInput(event.target.value)
  }
  return (
    <div className="App">
      <h1>labefy</h1>
      <div> 
        <input value={input} onChange={handleInput} />
        <button onClick={createPlaylist}>criar playlist</button> 
      </div>
      {playlists}
    </div>
  );
}

export default App;
