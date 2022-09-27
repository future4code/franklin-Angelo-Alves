import axios from "axios";
import React from "react";
import './App.css'

const baseURL = "https://brainn-api-loterias.herokuapp.com/api/v1/";

function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/loterias`).then((response) => {
      setPost(response.data);
    });
  }, []);
  return (
    <div className="App">
      {post ? post.map((loteria) => <h1>{loteria.nome}</h1>) : <h1>caregando</h1>}
    </div>
  );
}
export default App

