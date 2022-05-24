import logo from './logo.svg';
import './App.css';

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
                    <li className="botoes-meunu-vertical">Em alta</li>
                    <li className="botoes-meunu-vertical">Inscrições</li>
                    <hr/>
                    <li className="botoes-meunu-vertical">Originais</li>
                    <li className="botoes-meunu-vertical">Histórico</li>
                </ul>
            </nav>

            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt=""></img>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt=""></img>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt=""></img>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt=""></img>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt=""></img>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt=""></img>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt=""></img>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt=""></img>
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>YouTube © 2022 Google LLC</h4>
        </footer>
      </div>
      <script src="https://kit.fontawesome.com/8e5b515665.js" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
