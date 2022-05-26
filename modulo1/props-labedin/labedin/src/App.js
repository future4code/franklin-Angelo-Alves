import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://ca.slack-edge.com/ENP7P22D6-U03DKMJ4FDF-e5435ae69c30-48" 
          nome="Angelo Alves" 
          descricao="Oi! Que prazer! Sou um desenvolvedor de software apaixonado por técnologia! Atualmente atuo como Desenvolvedor I no Grupo Boticário, no setor de Integração de pedidos"
        />
        
        <ImagemButton 
          imagem="https://i.pinimg.com/originals/09/0a/ea/090aea0be7fa8331086ce7023350ef0a.png" 
          texto="Ver mais"
        />
      </div>
      <CardPequeno imagem="https://cdn-icons-png.flaticon.com/512/561/561127.png" item="Email:" info="angelo.grupoboticario.com.br" />
      <CardPequeno imagem="https://cdn-icons-png.flaticon.com/512/535/535239.png" item="Endereço:" info="Cabo Frio - RJ" />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://d1fdloi71mui9q.cloudfront.net/b6TXwI3TguktiUYKx5cw_p0XoT5v9gMkTJLeB" 
          nome="Labenu" 
          descricao="Formação FullStack" 
        />
        
        <CardGrande 
          imagem="https://www.ycar.com.br/site20/wp-content/uploads/2021/04/grupo-boticario-anuncia-plano-de-gestao-de-residuos.png" 
          nome="Grupo Boticário" 
          descricao="Developer I" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
