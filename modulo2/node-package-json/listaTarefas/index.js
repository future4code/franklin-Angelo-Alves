const listaDeTarefas = ['estudar', 'almoçar']
const tarefaNova = process.argv[2]
listaDeTarefas.push(tarefaNova)
console.log('Tarefa adicionada com sucesso!!')
console.log('- - - - - - - - - - - - - - - -')
console.log('Suas tarefas do dia são:')
listaDeTarefas.map((tarefa)=>{
console.log(tarefa)
})