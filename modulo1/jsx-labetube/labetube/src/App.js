import './App.css';
import Card from './components/Card'
import MenuItem from './components/MenuItem';
import Footer from './components/Footer'

function App() {
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  } 
  const titulo = "Titulo do vídeo"
  
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <div className="logo-lbn">
            <img src="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/60b3a3831a7de700013f67a8/picture" alt=""></img>
            <h1>Lab Tube</h1>
          </div>
          <form className="search-bar">
            <input type="text" placeholder="Pesquisar" id="campoDeBusca" />
            <button type="submit" className="search-icon">&#x1F50D;</button>
          </form>
          
          <img src="https://www.vrbo.com/bizops/travelerHome/picturePublicPathByAccount?accountUuid=5cf1074a-aee4-4cb7-b5e9-2cc178a9383c&pictureSize=normal" className="profile-pic"></img>
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical active">Início</li>
                    <MenuItem texto={'Em alta'}></MenuItem>
                    <MenuItem texto={'Inscrições'}></MenuItem>
                    <hr/>
                    <MenuItem texto={'Originais'}></MenuItem>
                    <MenuItem texto={'Histórico'}></MenuItem>
                </ul>
            </nav>

            <section className="painel-de-videos">
              <Card classes={'box-pagina-principal media1'} url={"https://picsum.photos/400/400?a=1"} 
              titulo={'A trança do careca'}/>

              <Card classes={'box-pagina-principal media2'} url={"https://picsum.photos/400/400?a=2"} 
              titulo={'A ida dos que não voltaram'}/>

              <Card classes={'box-pagina-principal media3'} url={"https://picsum.photos/400/400?a=3"} 
              titulo={'A curva do quadrado'}/>

              <Card classes={'box-pagina-principal media4'} url={"https://picsum.photos/400/400?a=4"} 
              titulo={'A ponta da esfera'}/>

              <Card classes={'box-pagina-principal media5'} url={"https://picsum.photos/400/400?a=5"} 
              titulo={'A volta dos que não foram'}/>

              <Card classes={'box-pagina-principal media6'} url={"https://picsum.photos/400/400?a=6"} 
              titulo={'A tipagem do Javascript'}/>

              <Card classes={'box-pagina-principal media7'} url={"https://picsum.photos/400/400?a=7"} 
              titulo={'A paciência do dev'}/>

              <Card classes={'box-pagina-principal media8'} url={"https://picsum.photos/400/400?a=8"} 
              titulo={'Windows>Mac'}/>

            </section>
        </main>
        <Footer></Footer>
      </div>
      <script src="https://kit.fontawesome.com/8e5b515665.js" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
