import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
return(
  <MainContainer>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
          <Post
            nomeUsuario={'rebecca'}
            fotoUsuario={'https://picsum.photos/52/50'}
            fotoPost={'https://picsum.photos/220/150'}
          />
          <Post
            nomeUsuario={'angelo'}
            fotoUsuario={'https://picsum.photos/51/50'}
            fotoPost={'https://picsum.photos/250/150'}
          />
        </MainContainer>
)

}


export default App;
