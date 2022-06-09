import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  font-size:20px;
  font-style: italic;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  list-style:none;
  margin:10px;
  text-align:center;
`

const InputsContainer = styled.div`
display:flex;
align-items:center;
`
const PInfo = styled.p`
  color:gray;
  margin:1px;
  font-style: italic;
`

const InputTask = styled.input`
font-size:20px;
width:100%`
const ButtonTask = styled.button`
color:white;
background-color: black;
border-radius:25px;
border:none;
box-shadow: none;
cursor:pointer;
padding:10px;
margin-left:10px;
`


function App() {
  const [tarefas, setTarefa] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filtro, setFiltro] = useState("")
    
  useEffect(() => {

  }, [])

  useEffect(() => {

  }, [])


  const onChangeInput = (event) => {
    setInputValue(event.target.value)
  }

  const criaTarefa = () => {
    let novaTarefa = {
      id: Date.now(),
      texto:inputValue,
      completa: false
    }
    const tarefasNovas = [...tarefas, novaTarefa]
    setTarefa(tarefasNovas)
    setInputValue('')
  }

  const selectTarefa = (id) => {
    const index = tarefas.findIndex( (tarefa) => tarefa.id === id);
    let novaLista = [...tarefas]
    novaLista[index].completa = !novaLista[index].completa
    setTarefa(novaLista)
  }

  const delTarefa = (id) => {
    const index = tarefas.findIndex( (tarefa) => tarefa.id === id);
    let novaLista = [...tarefas]
    novaLista.splice(index, 1)
    setTarefa(novaLista)
  }

  const onChangeFilter = (event) => {

  }

    const listaFiltrada = tarefas.filter(tarefa => {
      switch (filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    });
    

    return (
      <div className="App">
        <h1>To-Do List</h1>
        <InputsContainer>
          <InputTask value={inputValue} onChange={onChangeInput}/>
          <ButtonTask onClick={criaTarefa}>Add</ButtonTask>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={filtro} onChange={onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => selectTarefa(tarefa.id)}
                onDoubleClick = {() => delTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
        <PInfo>Click uma vez para dar check</PInfo>
        <PInfo>Double Click para excluir a tarefa</PInfo>
      </div>
    )
  
}
export default App
