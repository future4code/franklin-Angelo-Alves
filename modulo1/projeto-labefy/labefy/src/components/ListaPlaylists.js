//import './App.css';
import axios from 'axios'
import React, { useState } from 'react';
import styled from 'styled-components'

const Li = styled.li`
list-style: none;
font-style: italic;
margin`


function ListaPlaylist(props) {
    const [input, setInput] = useState('')
    const [playlists, setPlaylists] = useState([])
    const handleInput = (event) =>{
        setInput(event.target.value)
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
            setInput('')
        }).catch((error) => {
          
        })
      }
      function delPlaylist(id){
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,{
            headers: {
              Authorization: 'angelo-alves-franklin'
            }
          }).then((response) => {
            setPlaylists(response.data.result.list)
          }).catch((error) => {
            console.log(error)
          })
      }
      function getAll(){
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',{
          headers: {
            Authorization: 'angelo-alves-franklin'
          }
        }).then((response) => {
          setPlaylists(response.data.result.list)
        }).catch((error) => {
          console.log(error)
        })
        
      }

      const listaPlaylists = playlists.map((element) =>{
        return(
            <Li onClick={() => clicou(element.id)} onDoubleClick = {() => delPlaylist(element.id)} key={element.id}>
                  <h2>{element.name}</h2>
            </Li>)
      })

      function clicou(id){
      //  props.etapa('playlist')
      console.log(`abriu a playlist ${id}`)
      }
      getAll();
    return (
        <div>
            <h1>labefy</h1>
            <div>
                <input value={input} onChange={handleInput} />
                <button onClick={createPlaylist}>criar playlist</button>
            </div>
            <h1>Suas Playlists : </h1>
            <ul>
                {listaPlaylists}
            </ul>
        </div>
    )
}

export { ListaPlaylist }