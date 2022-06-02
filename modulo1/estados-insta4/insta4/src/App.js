import React, { useState } from "react";
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`
const FormPost = styled.div`
display:flex;
flex-direction:column;
align-items: center;
`
const InputPost = styled.input`
padding:10px;
margin:10px;
font-size:17px;
`
const ButtonPost = styled.button`
padding:10px;
margin:10px;
font-size:17px;
background-color:linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
border-radius:25px;
color:black;
width:50%;
`
function App() {
  const [feed, setFeed] = useState([
      {
        nomeUsuario: "angelo.alvesz",
        fotoUsuario: "https://ca.slack-edge.com/TLAVDH7C2-U03EFPLUCJW-d2dd5e660964-512",
        fotoPost: "https://ca.slack-edge.com/TLAVDH7C2-U03EFPLUCJW-d2dd5e660964-512"
      },
      {
        nomeUsuario: "francisco",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/50/50"
      }
])

const [inputNome, setInputNome] = useState('')
const [inputProfile, setInputProfile] = useState('')
const [inputFoto, setInputFoto] = useState('')

const handleInputNome = (event)=> {
setInputNome(event.target.value)
}
const handleInputProfile = (event) =>{
  setInputProfile(event.target.value)
}
const handleInputFoto = (event)=>{
    setInputFoto(event.target.value)
}
const adicionaPost = () => {
  const novoPost = {
    nomeUsuario: inputNome,
    fotoUsuario: inputProfile,
    fotoPost: inputFoto,
  };
  const listaPosts = [...feed, novoPost];
  setFeed(listaPosts);
  setInputNome('');
  setInputProfile('');
  setInputFoto('');
};


const listaDePosts = feed.map((post,index) =>{
  return(
      <Post key={index}
            nomeUsuario={post.nomeUsuario}
            fotoUsuario={post.fotoUsuario}
            fotoPost={post.fotoPost}
          />)
})

return(
  <MainContainer>
    <FormPost>
      <InputPost placeholder="Nome de usuário" value={inputNome} onChange={handleInputNome} />
      <InputPost placeholder="URL da foto de perfil" value={inputProfile} onChange={handleInputProfile} />
      <InputPost placeholder="URL da foto do post" value={inputFoto} onChange={handleInputFoto} />
      <ButtonPost onClick={adicionaPost}>Postar</ButtonPost>
    </FormPost>
    {listaDePosts}
  </MainContainer>
)

}

export default App;
