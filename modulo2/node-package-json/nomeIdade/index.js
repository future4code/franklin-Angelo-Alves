const nome = process.argv[2]
const idade = Number(process.argv[3])

const idade7AnosDepois = idade + 7 

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade7AnosDepois}`)